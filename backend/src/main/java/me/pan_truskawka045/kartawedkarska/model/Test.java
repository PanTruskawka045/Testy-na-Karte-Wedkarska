package me.pan_truskawka045.kartawedkarska.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.tests.TestStatus;

import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "tests", uniqueConstraints = {
        @UniqueConstraint(columnNames = "public_id")
})
public class Test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String publicId = UUID.randomUUID().toString().replace("-", "");

    @Enumerated(EnumType.STRING)
    private TestStatus status = TestStatus.IN_PROGRESS;

    private Date startDate = new Date();
    private Date finishDate;

    private int points;
    private int maxPoints;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
