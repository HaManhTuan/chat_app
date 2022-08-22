FROM php:7.4-fpm-alpine

MAINTAINER Kaopiz <kaopiz.com>

RUN apk add wget \
  shadow \
  curl \
  git \
  build-base \
  libmcrypt-dev \
  libxml2-dev \
  linux-headers \
  pcre-dev \
  zlib-dev \
  autoconf \
  cyrus-sasl-dev \
  libgsasl-dev \
  oniguruma-dev \
  libressl \
  libressl-dev \
  supervisor\
  unzip\
  libzip-dev\
  libpng \
  libjpeg-turbo \
  freetype-dev \
  libpng-dev \
  libjpeg-turbo-dev \
    && docker-php-ext-install gd \
    && docker-php-ext-install zip


RUN pecl channel-update pecl.php.net; \
  docker-php-ext-install pdo pdo_mysql mysqli mbstring pdo pdo_mysql tokenizer xml exif pcntl gd zip

RUN curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer

ARG DEBUG=true
ENV DEBUG ${DEBUG}

RUN if [ ${DEBUG} = true ]; then \
    pecl install xdebug \
    && \
    docker-php-ext-enable xdebug \
    ;fi

RUN rm /var/cache/apk/*

COPY ./supervisor/app_worker.conf /etc/supervisord.conf

ARG PUID=1000
ENV PUID ${PUID}
ARG PGID=1000
ENV PGID ${PGID}

RUN /usr/sbin/groupadd -og ${PGID} www-docker && \
    /usr/sbin/useradd -s /bin/sh -g ${PGID} -u ${PUID} www-docker

RUN chown -R www-docker:www-docker /var/www

WORKDIR /var/www

USER www-docker

EXPOSE 9000

CMD supervisord -n -c /etc/supervisord.conf
