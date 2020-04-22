package com.log.backend.controller;

import com.log.backend.dto.LogDto;
import com.log.backend.expection.LogNotFoundException;
import com.log.backend.mappers.LogMapper;
import com.log.backend.model.Log;
import com.log.backend.service.LogService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.noContent;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/api")
public class LogController {

    @Autowired
    private LogService logService;


    @GetMapping(path = "/logs")
    @ApiOperation(value = "Return the list logs")
    public ResponseEntity<List<LogDto>> getLogs() {
        LogMapper logMapper = LogMapper.INSTANCE;
        List<LogDto> response =  this.logService.getLogs().parallelStream()
                                                 .map(logMapper::LogEntityToLogDto)
                                                 .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/logs/{id}")
    ResponseEntity<Log> getLogs(@PathVariable Integer id) throws LogNotFoundException {
      Log response = this.logService.findLogById(id);
      return ResponseEntity.ok(response);

    }

    @PostMapping(path = "/logs")
    public ResponseEntity<Void> saveLog(@RequestBody Log log) throws LogNotFoundException {
         this.logService.salveLog(log);
         return noContent().build();
    }

    @DeleteMapping(path = "/logs/{id}")
    public ResponseEntity<Void> deleteLog(@PathVariable Integer id) throws LogNotFoundException {
        Log response = this.logService.findLogById(id);
        this.logService.deleteLog(response);
        return noContent().build();
    }

}
