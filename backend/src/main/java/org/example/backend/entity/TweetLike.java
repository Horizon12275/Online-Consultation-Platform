package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "tweet_likes")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})//忽略cartItems属性 并且解决某一字段可能为null的问题
public class TweetLike {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid")
    @JsonIgnoreProperties({"likes","username","password","role","avatar","email","enabled","level","tel","aboutMe"})
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tid")
    @JsonIgnoreProperties({"likes","replies","book","user"})
    private Tweet tweet;
}
