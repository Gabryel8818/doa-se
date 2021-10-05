package br.com.treinaweb.springbootapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
		.antMatchers(HttpMethod.GET, "/ong").permitAll()
		.antMatchers(HttpMethod.GET, "/ong/**").permitAll()
		.antMatchers(HttpMethod.GET, "/receptor").permitAll()
		.antMatchers(HttpMethod.GET, "/receptor/**").permitAll()
		.antMatchers(HttpMethod.GET, "/doador").permitAll()
		.antMatchers(HttpMethod.GET, "/doador/**").permitAll()
		.antMatchers(HttpMethod.GET, "/doacao").permitAll()
		.antMatchers(HttpMethod.GET, "/doacao/**").permitAll()
		.antMatchers(HttpMethod.POST, "/ong").permitAll()
		.antMatchers(HttpMethod.POST, "/receptor").permitAll()
		.antMatchers(HttpMethod.POST, "/doador").permitAll()
		.antMatchers(HttpMethod.POST, "/doacao").permitAll()
		.antMatchers(HttpMethod.PUT, "/ong").permitAll()
		.antMatchers(HttpMethod.PUT, "/receptor").permitAll()
		.antMatchers(HttpMethod.PUT, "/doador").permitAll()
		.antMatchers(HttpMethod.DELETE, "/ong").permitAll()
		.antMatchers(HttpMethod.DELETE, "/receptor").permitAll()
		.antMatchers(HttpMethod.DELETE, "/doador").permitAll()
		.antMatchers(HttpMethod.DELETE, "/doacao").permitAll()
		.antMatchers(HttpMethod.GET, "/actuator").permitAll()
		.antMatchers(HttpMethod.GET, "/actuator/**").permitAll()
		.anyRequest().authenticated()
		.and().csrf().disable().cors();
	}

}
