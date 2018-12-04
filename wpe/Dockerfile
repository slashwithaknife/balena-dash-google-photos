FROM petrosagg/resin-wpe:raspberrypi3-30c7465

COPY wpe-init /wpe-init

COPY public_html /var/lib/public_html

ENV WPE_URL="file:///var/lib/public_html/index.html"

CMD [ "/wpe-init" ]
