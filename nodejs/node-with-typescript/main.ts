import * as fs from "fs";

const stream = fs.createWriteStream("1.txt");

stream.write("blabla");
