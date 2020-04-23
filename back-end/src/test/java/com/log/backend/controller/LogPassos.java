package com.log.backend.controller;

import com.github.tomakehurst.wiremock.WireMockServer;
import static com.github.tomakehurst.wiremock.client.WireMock.post;
import static com.github.tomakehurst.wiremock.client.WireMock.postRequestedFor;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.client.WireMock.containing;
import static com.github.tomakehurst.wiremock.client.WireMock.equalTo;


import com.google.gson.Gson;
import com.log.backend.model.Log;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import java.util.List;

import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.options;
import static org.junit.Assert.assertEquals;

/**
 * @author Elton H. Paula
 */
public class LogPassos {

    public static final String END_POINT = "/api/logs";
    public static final String APPLICATION_JSON = "application/json";
    private List<Log> logs;
    private Integer totalLogsGravados = 0;
    private final WireMockServer wireMockServer = new WireMockServer(options().dynamicPort());

    @Dado("^que as lista de logs sejam gravadas$")
    public void que_as_lista_de_logs_sejam_gravadas(List<Log> logs) {
        this.logs = logs;
    }

    @Dado("^o total de logs criadas$")
    public void o_total_de_logs_criadas()  throws Throwable {




        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpPost request = new HttpPost("http://localhost:8080/api/logs");
        request.addHeader("Content-Type", "application/json");

        Gson gson = new Gson();

        for(Log log : logs) {
            String json = gson.toJson(logs.get(0));
            request.setEntity(new StringEntity(json));
            request.addHeader("Content-Type", APPLICATION_JSON);
            HttpResponse response = httpClient.execute(request);
            assertEquals(204, response.getStatusLine().getStatusCode());

            if(response.getStatusLine().getStatusCode() == 204) {
                this.totalLogsGravados++;
            }
        }
    }

    @Entao("^o total de logs e (\\d+)$")
    public void o_total_de_logs_e(Integer total) {
        assertEquals("A quantidade de inserção de logs está incorreto", this.totalLogsGravados, total);
    }
}
