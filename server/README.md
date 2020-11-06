# Back-end section

Full Stack Web Application<br />


### Contributor:

Jordy Hamwijk (Full Stack Developer)<br />
<br />
school
*Last updated on: 06-11-2020 by Jordy Hamwijk*
<br />

## Back-end Setup

The back-end of this application is build using **Spring Boot**.<br />
Configuring the back-end of the application is simplified with the use of Spring Boot dependencies which enables us to simply select the required dependencies to quickly setup the back-end of our application.
<br />

## Setting up the Spring Boot Back-end

Via [https://start.spring.io](https://start.spring.io), following Spring Boot project is generated:
* **Project:** ```Maven Project```<br />
* **Language:** ```Java```<br />
* **Spring Boot (version):** We will use the latest stable version: ```2.3.5```<br />
* **Group:** ```com.Jordy Mind```<br />
* **Artifact:** ```server```<br />
* **Description:** ```App Builder```<br />
* **Packaging:** ```JAR```<br />
* **Java:** version ```11```<br />
* **Dependencies:** ```Spring Web, Spring Data JPA, PostgreSQL Driver, Spring Security, Lombok```<br />

![Spring Boot Dependency Selection]()
<br />

### Spring Web
Spring Web provides core HTTP integration, including some handy Servlet filters, Spring HTTP Invoker, infrastructure to integrate with other web frameworks and HTTP technologies.<br />
<br />
Jordy Mind uses Spring Web to handle the HTTP (GET/POST/UPDATE/DELETE) requests.

### Spring Data JPA
The Java Persistence API (JPA) is a Java specification for accessing, persisting, and managing data between Java objects / classes and a relational database.<br />
<br />
Jordy Mind uses Spring Data JPA to manage data between the Java service classes and the relational database PostgreSQL.

### PostgreSQL Driver
(Pronounced "post-gress-Q-L") is an open source relational database management system ( DBMS ) developed by a worldwide team of volunteers.<br />
<br />
Jordy Mind uses the PostgreSQL Driver to manage the data being saved and queried in the PostgreSQL database.

### Spring Security
Spring Security is a framework that focuses on providing both authentication and authorization to Java applications.<br />
Like all Spring projects, the real power of Spring Security is found in how easily it can be extended to meet custom requirements.<br />
<br />
Jordy Mind uses the Spring Security dependency to manage authorization and authentication settings.<br />
Jordy Mind requires users to register and login, as such Spring Security is integrated in our application.

### Lombok
Project Lombok is a Java library that automatically plugs into the editor and build tools, spicing up Java.<br />
Never write another getter or equals method again. Ideal to reduce boilerplate code.<br />
<br />
Jordy Mind uses Lombok to reduce boilerplate code and maintain optimal readability of the codes.

### JSON Webtoken (JWT)
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.<br />
<br />
Jordy Mind uses the JSON Webtoken dependency to manage the secured transmission of data.<br />
Jordy Mind requires users to register and login, with the JSON Webtoken the server knows exactly which user is logged in at any given time.<br />
Providing correct authorization and enabling the user to navigate within the correct application environment.

### Spring Boot Configuration Processor
This dependency ensures that additional metadata is available when the annotation processor runs during compilation.<br />
The processor picks up both classes and methods that are annotated with `@ConfigurationProperties`.<br />
The Javadoc for field values within configuration classes is used to populate the description attribute.<br />

Jordy Mind has one specific class requiring the annotation `@ConfigurationProperties` which will enable properties with prefix `file` being binded automatically.

### Javax Validation
With the use of the Javax Bean Validation Api it is quite easy to ensure standard validation (not null, patterns, email) on entities (or beans in common).<br />
<br />
Within the entities of the server-side code of the Jordy Mind application, validation is required. As such the Javax validation dependency is used to enable the correct validation annotations required.<br />

<hr />

### POM.xml
A Project Object Model or POM is the fundamental unit of work in Maven.<br />
It is an XML file that contains information about the project and configuration details used by Maven to build the project.<br />
<br />
The following listing shows the `POM.xml` file of this project:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.5.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.JordyMind</groupId>
	<artifactId>demo</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>demo</name>
	<description>Demo project for Spring Boot</description>

	<properties>
		<java.version>11</java.version>
	</properties>

	<dependencies>
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
			<groupId>org.apache.tomee</groupId>
			<artifactId>javaee-api</artifactId>
			<version>8.0-3</version>
		</dependency>
		<dependency>
			<groupId>javax.validation</groupId>
			<artifactId>validation-api</artifactId>
			<version>2.0.1.Final</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.data</groupId>
			<artifactId>spring-data-jpa</artifactId>
			<version>2.3.4.RELEASE</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-core</artifactId>
			<version>5.3.3.RELEASE</version>
		</dependency>
	</dependencies>

	<build>
		<plugins>
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

The back-end file infrastructure tree is listed as per below.<br />
The files, such as controllers, models, services etc. have been splitted in packages to provide a clear overview and accomodate a fast navigation through the files.<br />
With the current infrastructure, it is easier to expand the application in the near future.


### Audit
The Audit model is created to extend other models with a creation timestamp and updated timestamp.<br />
In some cases it is handy to have such information. This way the application will ensure logging of these details.<br />
The timestamps in return are logged in the database.<br />

### Auth (Authorization & Authentication)
The application requires authorization and authentication.<br />
JWT ensures correct authorization and authentication of the user according following process:<br /><br />
![JWT Authorization and Authentication]()

### File
Within the application, files can be saved and in return downloaded.<br />
This part of the application is used with uploading image(s) and downloading image(s), specifically the user avatar picture.<br />

### Profile
Each user has a profile, the profile therefor has a one-to-one relationship with the user.<br />
In order to split the amount of data per user in the database, this split was introduced to save main User's details with the User model, and secondary user details with the Profile model.<br />
The profile details consist of a first name, last name, phonenumber, gender, date of birth, city and country.

### Role
The application defines 3 (three) roles:<br />
- Administrator
- Moderator
- User

These roles are defined with the ERole enumerated list.

### User
In order for the application to process user information, the user is required to register its details.<br />
The userdetails consist of a username, email and password.<br />
With registration, the userdetails are saved in the database after which the user can login with these credentials.<br />
<br />
In case you would like to know more about each section, look into the code, all codes in the back-end have been commented to provide a clear understanding and enable easy modification in the future.

<br />

## Application Properties

The Application Properties file is used to set the properties in a single file to run the application in a different environment. In Spring Boot, properties are kept in the application.properties file under the classpath.<br />
<br />
The application.properties file is located in the src/main/resources directory.<br />
Below you will find the current Application Properties settings including accompanied commenting.


<br />

## .gitignore

The gitignore file is a text file that tells Git which files or folders to ignore in a project.<br />
For the back-end section, following .gitignore file is created:


## Conclusion


[Front-end]()

[Back to Top Level]()

[Help](https://github.com/hogeschoolnovi/eindopdracht-jeffrey-jordy/blob/master/client/src/Support/Help.md)
