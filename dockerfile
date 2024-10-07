FROM alpine:3.16.3
RUN mkdir app
RUN echo date > app/date.txt
CMD [ "cat", "/app/date.txt" ]