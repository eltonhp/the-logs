package com.log.backend.service;

import com.log.backend.expection.LogNotFoundException;
import com.log.backend.model.Log;
import com.log.backend.repository.LogRepository;
import org.apache.commons.lang3.Validate;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class LogService {

    LogRepository logRepository;

    public LogService(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    public List<Log> getLogs() {
         return this.logRepository.findAll();
    }

    public void salveLog(Log log) throws LogNotFoundException {
        this.validaLog(log);
        log.setData(LocalDateTime.now());
        log.setStatus(HttpStatus.OK.value());
        this.logRepository.save(log);
    }

    private void validaLog(Log log) throws LogNotFoundException {
        if(log == null) {
            throw new LogNotFoundException();
        }
        try {
            Validate.notNull(log.getAgent(), "Agente não pode ser nulo");
            Validate.notNull(log.getIp(), "IP não pode ser nulo");
            Validate.notNull(log.getRequest(), "Tipo de Requisição não pode ser nulo");

        } catch(NullPointerException e) {
            throw new LogNotFoundException(e.getMessage());
        }
    }

    public Log findLogById(Integer id) throws LogNotFoundException {
        if(id == null) {
            throw new LogNotFoundException(id);
        }

        return this.logRepository.findById(id)
                   .orElseThrow(() -> new LogNotFoundException(id));
    }

    public void deleteLog(Log id) {
        this.logRepository.delete(id);
    }
}
