package com.log.backend.mappers;

import com.log.backend.dto.LogDto;
import com.log.backend.model.Log;

import com.log.backend.model.RequestEnum;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;
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


    @Mappings({
            @Mapping(target = "id"),
            @Mapping(target = "ip"),
            @Mapping(target = "data"),
            @Mapping(target = "agent"),
            @Mapping(target = "request"),
            @Mapping(target = "status"),
            @Mapping(source = "logDto", target = "requestEnum", qualifiedByName = "convertRequestEnum"),
    })
    Log logDtoToLog(LogDto logDto);


    @Named("convertRequestEnum")
    default RequestEnum convertRequestStringToRequestEnum(LogDto logDto) {
        return RequestEnum.of(logDto.getRequest());
    }
}
