package com.log.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.mapstruct.Mapping;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogDto {
  private Integer id;
  private String ip;
  private LocalDateTime data;
  private Integer status;
  private String agent;
  private String request;
}
