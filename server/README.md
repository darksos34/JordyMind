# Server - BACK-END

### Contributor:

Jordy Hamwijk (Full Stack Developer @ ViaConnect)<br />
<br />

*Last updated on: 11-11-2020 by Jordy Hamwijk*
<br />

## Back-end Setup

The back-end of this application is build using **Spring Boot**.<br />
Configuring the back-end of the application is simplified with the use of Spring Boot dependencies which enables us to simply select the required dependencies to quickly setup the back-end of our application.
<br />

## Setting up the Spring Boot Back-end

Via [https://start.spring.io](https://start.spring.io), following Spring Boot project is generated:
* **Project:** ```Maven Project```<br />
* **Language:** ```Java```<br />
* **Spring Boot (version):** We will use the latest stable version: ```2.3.0```<br />
* **Group:** ```com.Jordy Mind```<br />
* **Artifact:** ```server```<br />
* **Description:** ``````<br />
* **Packaging:** ```JAR```<br />
* **Java:** version ```11```<br />
* **Dependencies:** ```Spring Web, Spring Data JPA, PostgreSQL Driver, Spring Security, Lombok```<br />

![Spring Boot Dependency Selection](https://raw.githubusercontent.com/hogeschoolnovi/eindopdracht-jeffrey-jordy/master/images/01-spring-boot-generated-project.JPG?token=AOL7G77AVRY6UD6CGRK4BFS6ZVR7U)
<br />

### Spring Web

### Spring Data JPA

### PostgreSQL Driver

### Spring Security

### Lombok not all function are working in lombo

### JSON Webtoken (JWT)

### Spring Boot Configuration Processor

### Javax Validation

### POM.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.3.2.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.MindAppMix</groupId>
    <artifactId>Mindapplication</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>JordyMindApplication</name>
    <description>Demo project for Spring Boot</description>

    <properties>
        <java.version>11</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.springframework.restdocs</groupId>
            <artifactId>spring-restdocs-mockmvc</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>javax.validation</groupId>
            <artifactId>validation-api</artifactId>
            <version>2.0.1.Final</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.asciidoctor</groupId>
                <artifactId>asciidoctor-maven-plugin</artifactId>
                <version>1.5.8</version>
                <executions>
                    <execution>
                        <id>generate-docs</id>
                        <phase>prepare-package</phase>
                        <goals>
                            <goal>process-asciidoc</goal>
                        </goals>
                        <configuration>
                            <backend>html</backend>
                            <doctype>book</doctype>
                        </configuration>
                    </execution>
                </executions>
                <dependencies>
                    <dependency>
                        <groupId>org.springframework.restdocs</groupId>
                        <artifactId>spring-restdocs-asciidoctor</artifactId>
                        <version>${spring-restdocs.version}</version>
                    </dependency>
                </dependencies>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>


```

<br />

## Back-end Infrastructure


```

```

### Audit

### Auth (Authorization & Authentication)

### File

### Profile

### Role

### User


## Application Properties



```bash

#
# /*
#  * Coding for fun created by Darksos34.
#  * Copyright (c) 2020.
#  * All rights reserved by Jordy Hamwijk
#  * Learning Computer Language.
#  */
#

# Spring Boot REST API path:
spring.data.rest.base-path=/api

# import.sql=development |or| data.sql= production
#spring.datasource.data=classpath:data.sql

# The SQL dialect makes Hibernate generate better SQL for the chosen database:
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

# Avoid warning message log with application start:

# Test the properties bellow  metadata defaults
 spring.jpa.properties.hibernate.temp.use_jdbc_metadata_defaults = false
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true

# JPA Time Zone Setting:
spring.jpa.properties.hibernate.jdbc.time_zone=CET


# Spring Boot PostgreSQL Database connection settings:
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=root

# Or MongoDB
#spring.data.mongodb.database=darksos34_db
#spring.data.mongodb.port=27017

# Database (create) tables || (update) tables settings:
spring.jpa.hibernate.ddl-auto=create


# Property only necessary in production
spring.datasource.initialization-mode=always


## JPA OSIV (Open Session In View) settings:
spring.jpa.open-in-view=false



# Hibernate Debug Mode
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type=TRACE


```

<br />

## .gitignore

```bash
```
## Conclusion


[Front-end]()


[Back to Top Level]()

