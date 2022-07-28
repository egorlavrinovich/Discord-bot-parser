import getdata from "../helper/getdata.js";
import cherio from "cherio";
import removeemptyplaces from "../helper/removeemptyplaces.js";
import { ENV } from '../env.js';

const {URL,ATRIBUTE} = ENV

export default async function ParseData() {
    let result = [];
    try {
      const response = await getdata(URL);
      const $ = cherio.load(response);
      $(ATRIBUTE).each((i, header) => {
        const names = $(header).text();
        result.push(names)
        if (removeemptyplaces(result).length < 1) getData();
        else removeemptyplaces(result)
      });
    } catch (error) {
      console.log(error);
    }
    return result
  }