package me.pan_truskawka045.kartawedkarska.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;

import java.util.Collections;
import java.util.List;

public class StringToListConverter implements AttributeConverter<List<String>, String> {

    private final ObjectMapper mapper = new ObjectMapper();
    private final TypeReference<List<String>> typeReference = new TypeReference<>() {};

    @Override
    public String convertToDatabaseColumn(List<String> strings) {
        try {
            return mapper.writeValueAsString(strings);
        } catch (JsonProcessingException e) {
            return "[]";
        }
    }

    @Override
    public List<String> convertToEntityAttribute(String s) {
        try {
            return mapper.readValue(s, typeReference);
        } catch (JsonProcessingException e) {
            return Collections.emptyList();
        }
    }
}
