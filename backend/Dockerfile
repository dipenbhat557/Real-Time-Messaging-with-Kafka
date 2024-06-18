# Use the official Maven image to build the application
FROM maven:latest AS build
WORKDIR /backend
COPY . .
RUN mvn clean package -DskipTests

# Use the official OpenJDK image to run the application
FROM openjdk:latest
WORKDIR /backend
COPY --from=build /backend/target/backend.jar /backend/backend.jar
ENTRYPOINT ["java", "-jar", "/backend/backend.jar"]
