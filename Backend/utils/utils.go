package utils

import (
	"fmt"
	"math/rand"
	"time"
)

func GetRandom() *rand.Rand {
	return rand.New(rand.NewSource(time.Now().UnixNano()))
}

func GetRandomI64() int64 {
	return GetRandom().Int63()
}

func GetRandomAlias(length int) string {
	rand.Seed(time.Now().UnixNano())
	b := make([]byte, length)
	rand.Read(b)
	return fmt.Sprintf("@%x", b)[:length]
}
