package com.log.backend.service;
import com.log.backend.controller.LogController;
import com.log.backend.model.Log;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import java.net.URI;
import java.net.URISyntaxException;


@WebMvcTest(LogController.class)
public class LogServiceTest {

    @MockBean
    LogService logService;

    private Log log;

    @BeforeEach
    void setUp() {
     this.log =  Log.builder().ip("192.168.234.82")
                    .agent("swcd").status(200).request("GET / HTTP/1.1 ").build();
    }

    @Test
    public void validaLog() throws Exception {
        Mockito.verify(logService, Mockito.never()).validaLog(log);
    }

    @Test
    public void getListaLogsSuccesso() throws URISyntaxException
    {
        RestTemplate restTemplate = new RestTemplate();

        final String baseUrl = "http://localhost:"+8080+"/api/logs/";
        URI uri = new URI(baseUrl);

        ResponseEntity<String> result = restTemplate.getForEntity(uri, String.class);

        //Verify request succeed
        Assert.assertEquals(200, result.getStatusCodeValue());

    }
}
