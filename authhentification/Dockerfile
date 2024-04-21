FROM openjdk:17-jdk-slim
VOLUME /app
COPY . .
COPY target/auth.jar /auth.jar
CMD ["java","-jar","/auth.jar"]
EXPOSE 2424