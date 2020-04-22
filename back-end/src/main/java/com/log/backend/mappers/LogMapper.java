package com.log.backend.mappers;

import com.log.backend.dto.LogDto;
import com.log.backend.model.Log;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

@Mapper
public interface LogMapper {
    LogMapper INSTANCE = Mappers.getMapper( LogMapper.class );

    @Mappings({
            @Mapping(target = "id"),
            @Mapping(target = "ip"),
            @Mapping(target = "data"),
            @Mapping(target = "status"),
            @Mapping(target = "agent"),
            @Mapping(target = "request")
    })
    public LogDto LogEntityToLogDto(Log log);
}
