import { Injectable, BadRequestException } from '@nestjs/common';
import { DataBaseService } from './../../common/database/database.service';

@Injectable()
export class LocationService {
  constructor(private db: DataBaseService) { }

  public async getLocations(){
   try 
   {
      return  await  this.db.Query(
        `SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
           , ST_AsGeoJSON(lg.point)::json As geometry
           , row_to_json((SELECT l FROM (SELECT idLocation) As l
             )) As properties
          FROM geoprogram_schema.location As lg   ) As f )  As fc;`
      );
   }catch (error) 
   {
     return error;
   }
  }
 
  public async  getCultivos(){
   try {
      return this.db.Query(
        `SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
           , ST_AsGeoJSON(lg.geom)::json As geometry
           , row_to_json((SELECT l FROM (SELECT tipo) As l
             )) As properties
          FROM cultivo As lg   ) As f )  As fc`
      );
   } catch (error) {
     return error;
   }
  }

  public async  getVias(){
   try {
      return await this.db.Query(`SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
        , ST_AsGeoJSON(lg.point)::json As geometry
        , row_to_json((SELECT l FROM (SELECT idLocation) As l
        )) As properties
        FROM geoprogram_schema.location As lg   ) As f )  As fc;`
      );
   } catch (error) {
     return error;
   }
  }
 
  public async createLocation() {
    return this.db.Query(
        ``
      );  
  }

  public async get(){
  try {
    return await this.db.Query(`SELECT DISTINCT tipo FROM "public"."Rios"`);;
  } catch (error) {
    return error;
  }
}}
