package client

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"kay.backpacker/model"
)

type Client interface {
}

type client struct {
	repo model.Repository
}

type Station struct {
	Id       string `json:"id"`
	DeviceId string `json:"device_id"`
	Name     string `json:"name"`
	Location struct {
		Longitude float64 `json:"longitude"`
		Latitude  float64 `json:"latitude"`
	} `json:"location"`
}

type Item struct {
	TimeStamp string    `json:"timestamp"`
	Readings  []Reading `json:"readings"`
}

type Reading struct {
	StationId string  `json:"station_id"`
	Value     float64 `json:"value"`
}

type Response struct {
	Metadata struct {
		Stations []Station `json:"stations"`
	} `json:"metadata"`
	Items []Item `json:"items"`
}

func NewClient(repo model.Repository) Client {
	return &client{
		repo: repo,
	}
}

// 05 Sep 2021
// get rainfall data
func GetRainfall() *Response {
	client := &http.Client{}

	// 5 분마다 데이터 있음.
	req, err := http.NewRequest("GET", "https://api.data.gov.sg/v1/environment/rainfall?date=2017-01-22", nil)
	if err != nil {
		fmt.Println(err.Error())
	}

	// Add header
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/json")

	// Execute request
	resp, err := client.Do(req)
	if err != nil {
		fmt.Print(err.Error())
	}

	defer resp.Body.Close()

	var responseObject Response
	if err := json.NewDecoder(resp.Body).Decode(&responseObject); err != nil {
		log.Println(err)
	}

	WriteToCSV(&responseObject)
	return &responseObject
}

func WriteToCSV(responseObject *Response) {

	csvFile, err := os.Create("rainfall.csv")
	if err != nil {
		log.Fatalf("failed creating file: %s", err)
	}

	defer csvFile.Close()

	writer := csv.NewWriter(csvFile)

	// 나중에 looping돌려서
	// hashmap 으로 [station_id][station_name] 이렇게 하면 좀더 깔끔해질듯

	// for each timestamp
	for _, item := range responseObject.Items {
		var value string

		for _, reading := range item.Readings {
			value = fmt.Sprintf("%f", reading.Value)
		}

		for _, station := range responseObject.Metadata.Stations {
			var row []string
			latitude := fmt.Sprintf("%f", station.Location.Latitude)
			longitude := fmt.Sprintf("%f", station.Location.Longitude)

			row = append(row, item.TimeStamp)
			row = append(row, value)
			row = append(row, station.Name)
			row = append(row, latitude)
			row = append(row, longitude)

			fmt.Println(row)

			writer.Write(row)

		}
	}

	defer writer.Flush()

}
