#!/bin/sh

echo -e "\nhome page"
curl -s localhost:8080
#
#echo -e "\nregister page"
#curl -s -X POST -H "Content-Type: application/json" -d '{"email":"bob@aol.com", "password": "1234"}' localhost:8080/register
#
#echo -e "\nlogin page"
#curl -s -X POST -H "Content-Type: application/json" -d '{"email":"bob@aol.com", "password": "1234"}' localhost:8080/login

#echo -e "\nget profile page"
#curl -s localhost:8080/profile
#
#echo -e "\npost profile page"
#curl -s -X POST -H "Content-Type: application/json" -d '{"name":"", "picture": ""}' localhost:8080/profile
#
#echo -e "\nedit profile page"
#curl -s -X PUT -H "Content-Type: application/json" -d '{"name":"", "picture": ""}' localhost:8080/profile
#
#echo -e "\ndashboard page"
#curl -s localhost:8080/dashboard

echo -e "\npost a search"
curl -s -X POST -H "Content-Type: application/json" -d '{"url":"www.cnn.com", "depth": "2"}' localhost:8080/search

#echo -e "\ndelete a search"
#curl -s -X DELETE localhost:8080/search/idnumbergoeshere
#
#echo -e "\nslideshow page"
#curl -s localhost:8080/slideshow/imageidgoeshere




