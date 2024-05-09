package me.pan_truskawka045.kartawedkarska.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import me.pan_truskawka045.kartawedkarska.model.TestQuestions;

public class TestConverter implements AttributeConverter<TestQuestions, String> {

    private final ObjectMapper mapper = new ObjectMapper();
    private final TypeReference<TestQuestions> typeReference = new TypeReference<>() {};

    @Override
    public String convertToDatabaseColumn(TestQuestions strings) {
        try {
            return mapper.writeValueAsString(strings);
        } catch (JsonProcessingException e) {
            return "{}";
        }
    }

    @Override
    public TestQuestions convertToEntityAttribute(String s) {
        try {
            return mapper.readValue(s, typeReference);
        } catch (JsonProcessingException e) {
            return null;
        }
    }
}
