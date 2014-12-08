FROM fedora

RUN yum install -y nodejs
RUN yum install -y npm
RUN yum install -y git
RUN yum install -y bzip2

RUN git clone https://github.com/sggncucumber/nodeproductapi.git /app

WORKDIR /app

RUN npm install

EXPOSE 9999

CMD npm start