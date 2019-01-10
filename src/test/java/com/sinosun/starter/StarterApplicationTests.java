package com.sinosun.starter;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StarterApplicationTests {
	private static RestTemplate restTemplate;

	@BeforeClass
	public static void startUp()
	{
		restTemplate = new RestTemplate();
	}


	@Test
	public void contextLoads() {
	}

	@Test
	public void getAllCity() {
		JSONObject request = new JSONObject();
		JSONObject ret = restTemplate.postForObject("http://localhost:8080/train/getAllCity", request, JSONObject.class);
		System.out.println(JSON.toJSONString(ret, true));
	}


}

