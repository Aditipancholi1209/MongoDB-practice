// in case of multiple indexes for the same query
// before query it compares the performance of all indexes
// it stores the winning plan in cache & use it at time of multiple indexes


// cache is reset after 
// 1. after 1000 writes
// 2. index is reset
// 3. mongoDB server is restarted
// 4. Other indexes are manipulated