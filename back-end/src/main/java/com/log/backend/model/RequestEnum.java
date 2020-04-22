package com.log.backend.model;

import java.util.stream.Stream;

public enum RequestEnum {
    POST("POST / HTTP/1.1"),
    GET("GET / HTTP/1.1");

    private String request;

    RequestEnum(String s) {
        this.request = s;
    }

    public String getRequest() {
        return this.request;
    }

    public static  RequestEnum of(String request) {
        return Stream.of(RequestEnum.values())
                .filter(r -> r.getRequest().equals(request))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
