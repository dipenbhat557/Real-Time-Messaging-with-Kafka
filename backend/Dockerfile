# # Use Maven to build the application
# FROM maven:3.8.4-openjdk-17-slim AS build
# WORKDIR /app
# COPY . .
# RUN mvn clean package -DskipTests

# # Use the OpenJDK image to run the application
# FROM openjdk:17-jdk-slim
# WORKDIR /app
# COPY --from=build /app/target/*.jar /app/backend.jar
# EXPOSE 8080
# ENTRYPOINT ["java", "-jar", "/app/backend.jar"]
# Use the OpenJDK 18 as the base image
FROM openjdk:18

# Copy the JAR file of the Spring Boot application into the image and rename it to app.jar
COPY target/Real-Time-Messaging-0.0.1-SNAPSHOT.jar app.jar

# Set the entry point for the container to run the Java application with the app.jar file
ENTRYPOINT [ "java", "-jar", "app.jar" ]