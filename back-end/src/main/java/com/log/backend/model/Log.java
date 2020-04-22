package com.log.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "LOG")
public class Log {
    @Id
    @Column(name = "ID", columnDefinition = "serial")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "IP")
    private String ip;

    @Column(name = "DATA")
    private LocalDateTime data;

    @Column(name = "STATUS")
    private Integer status;

    @Column(name = "AGENT")
    private String agent;

    @Transient
    private RequestEnum requestEnum;

    @Column(name= "REQUEST")
    private String request;

    @PrePersist
    void fillRequest() {
        if (requestEnum != null) {
            this.request = requestEnum.getRequest();
        }
    }
}
