package com.log.backend.expection;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class LogNotFoundException extends Exception {
    public LogNotFoundException(Integer id) {
          this("Não encontrado o Log de id "+id);

    }

    public LogNotFoundException(String message) {
        super(message);
    }

    public LogNotFoundException() {
        this("Log não encontrado");
    }
}
