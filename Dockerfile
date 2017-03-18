FROM tmeisenh/docker-node-oracle:7.7.3-wheezy-ora-12.1.0.2.0

VOLUME ["/mystuff"]

WORKDIR /mystuff

CMD ["tail", "-f", "/dev/null"]
