


FROM public.ecr.aws/docker/library/nginx:1.26.1

# RUN apt-get update && \
#     apt-get install -y curl unzip && \
#     curl "https://s3.ap-southeast-2.amazonaws.com/amazon-ssm-ap-southeast-2/latest/debian_amd64/amazon-ssm-agent.deb" -o "amazon-ssm-agent.deb" && \
#     dpkg -i amazon-ssm-agent.deb && \
#     rm amazon-ssm-agent.deb  && \
#     apt-get clean 

# Install other dependencies
# RUN apt-get install -y vim
# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Run SSM agent in the background 
# RUN amazon-ssm-agent &

# Copy the React build output to Nginx's HTML directory
COPY iac/pipeline/client/build/ /usr/share/nginx/html

# Copy custom Nginx configuration if needed
COPY iac/pipeline/codebuild/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]




















# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# Retrieve hardened example Java 1.8 Image

# FROM public.ecr.aws/docker/library/tomcat:9.0

# RUN rm -rf /usr/local/tomcat/webapps/ROOT
# ADD target/helloworld.war /usr/local/tomcat/webapps/ROOT.war

# EXPOSE 8080
#CMD ["/opt/tomcat/bin/catalina.sh", "run"]