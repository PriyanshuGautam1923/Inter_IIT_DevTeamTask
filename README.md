# Inter IIT Tech 11.0 Dev Team Task

## Setup Instructions

1. Clone this repository onto your local system
2. Ensure that Docker is running on your system
3. Open your terminal and execute the following command

```console
docker-compose up

```

4. Open your Browser and visit the URL http://localhost:8080 to see the website

## Implementation

1. Used nodejs and meilisearch to accomplish the task.
2. The links are first read from the file saved_links.json and mapped to a new file data.json that contains data compatible to the meilisearch library.
3. Following the creation, new index named links was made and new documents added to it.
4. Now whenever the user types anything in the search box a post request is made alongwith the query term.
5. This term is used to query the index created in the meilisearch database and the results are converted into json and sent as response.
6. In the frontend the list of links was then used to properly render the content.

## Improvements/Ideas

1. To make the user experience better the search term can be highlighted in the responses being shown to the user.
2. User can be given the option to control the number of results he wants to be rendered by using the settings object in meilisearch.

## Deployment Link: -TBD-
