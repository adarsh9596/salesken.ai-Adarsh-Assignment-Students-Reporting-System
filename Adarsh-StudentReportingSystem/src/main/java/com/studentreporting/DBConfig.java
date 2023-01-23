package com.studentreporting;

import org.springframework.boot.context.properties.ConfigurationProperties;

import javax.annotation.PostConstruct;

@ConfigurationProperties("database.config")
public class DBConfig {

  private String driver;
  private String url;
  private String username;
  private String password;
  private int initialSize;
  private int maxActive;
  private int maxWait;

  public DBConfig() {}

  @PostConstruct
  public void init() {}

  public String getDriver() {
    return driver;
  }

  public void setDriver(String driver) {
    this.driver = driver;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public int getInitialSize() {
    return initialSize;
  }

  public void setInitialSize(int initialSize) {
    this.initialSize = initialSize;
  }

  public int getMaxActive() {
    return maxActive;
  }

  public void setMaxActive(int maxActive) {
    this.maxActive = maxActive;
  }

  public int getMaxWait() {
    return maxWait;
  }

  public void setMaxWait(int maxWait) {
    this.maxWait = maxWait;
  }
}
