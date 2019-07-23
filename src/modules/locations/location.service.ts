import { Injectable } from '@nestjs/common';
import { DataBaseService } from './../../common/database/database.service';

@Injectable()
export class LocationService 
{

  constructor(private db: DataBaseService) { }

  public async getLimits(limit: string)
  {
    try
    {
      return await this.db.Query(`
        SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
        , ST_AsGeoJSON(lg.geom)::json As geometry
        , row_to_json((SELECT l FROM (SELECT id) As l
        )) As properties
        FROM "public"."Limites" As lg WHERE "Estado" = '${limit}' ) As f )  As fc
      `);
    }
    catch(err)
    {
      return err;
    }
  }

  public async getBuildings(state: string)
  {
    try
    {
      return await this.db.Query(`
        SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
        , ST_AsGeoJSON(lg.geom)::json As geometry
        , row_to_json((SELECT l FROM (SELECT tipo) As l
        )) As properties
        FROM "public"."Edificaciones" As lg WHERE "Estado" = '${state}' ) As f )  As fc
      `);
    }
    catch(err)
    {
      return err;
    }
  }

  public async getRivers(state: string)
  {
    try
    {
      return await this.db.Query(`
        SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
        , ST_AsGeoJSON(lg.geom)::json As geometry
        , row_to_json((SELECT l FROM (SELECT tipo) As l
        )) As properties
        FROM "public"."Rios" As lg WHERE "Estado" = '${state}' ) As f )  As fc
      `);
    }
    catch(err)
    {
      return err;
    }
  }

  public async getCrops(state: string)
  {
    try
    {
      return await this.db.Query(`
        SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
        , ST_AsGeoJSON(lg.geom)::json As geometry
        , row_to_json((SELECT l FROM (SELECT tipo) As l
        )) As properties
        FROM "public"."Cultivos" As lg WHERE "Estado" = '${state}' ) As f )  As fc
      `);
    }
    catch(err)
    {
      return err;
    }
  }

  public async getJungle(state: string)
  {
    try
    {
      return await this.db.Query(`
        SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
        , ST_AsGeoJSON(lg.geom)::json As geometry
        , row_to_json((SELECT l FROM (SELECT id) As l
        )) As properties
        FROM "public"."Selva" As lg WHERE "Estado" = '${state}' ) As f )  As fc
      `);
    }
    catch(err)
    {
      return err;
    }
  }

  public async getPaddock(state: string)
  {
    try
    {
      return await this.db.Query(`
        SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
        , ST_AsGeoJSON(lg.geom)::json As geometry
        , row_to_json((SELECT l FROM (SELECT area) As l
        )) As properties
        FROM "public"."Potreros" As lg WHERE "Estado" = '${state}' ) As f )  As fc
      `);
    }
    catch(err)
    {
      return err;
    }
  }

  public async getProperty()
  {
    try
    {
      return await this.db.Query(`
        SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
        , ST_AsGeoJSON(lg.geom)::json As geometry
        , row_to_json((SELECT l FROM (SELECT "CODIGO", "area", "Nombre") As l
        )) As properties
        FROM "public"."Predios" As lg ) As f )  As fc
      `);
    }
    catch(err)
    {
      return err;
    }
  }

}