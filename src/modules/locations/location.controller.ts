import { Get, Controller, HttpStatus, Param} from '@nestjs/common';
import { LocationService } from './location.service';
import Response  from './../../common/Response/response';


@Controller('locations')
export class LocationController 
{

  constructor(private readonly locationService: LocationService) {}

  @Get('limites/:limit')
  public async limits(@Param('limit') limit:string )
  {
    return Response
      .status({ statusCode: HttpStatus.OK })
      .message('OK')
      .json(
        {
          data: await this.locationService.getLimits(limit)
        }
      )
    ; 
  }

  @Get('edificaciones/:state')
  public async buildings(@Param('state') state:string )
  {
    return Response
      .status({ statusCode: HttpStatus.OK })
      .message('OK')
      .json(
        {
          data: await this.locationService.getBuildings(state)
        }
      )
    ; 
  }

  @Get('rios/:state')
  public async rivers(@Param('state') state:string )
  {
    return Response
      .status({ statusCode: HttpStatus.OK })
      .message('OK')
      .json(
        {
          data: await this.locationService.getRivers(state)
        }
      )
    ; 
  }

  @Get('cultivos/:state')
  public async crops(@Param('state') state:string )
  {
    return Response
      .status({ statusCode: HttpStatus.OK })
      .message('OK')
      .json(
        {
          data: await this.locationService.getCrops(state)
        }
      )
    ; 
  }

  @Get('selva/:state')
  public async jungle(@Param('state') state:string )
  {
    return Response
      .status({ statusCode: HttpStatus.OK })
      .message('OK')
      .json(
        {
          data: await this.locationService.getJungle(state)
        }
      )
    ; 
  }

  @Get('potreros/:state')
  public async paddock(@Param('state') state:string )
  {
    return Response
      .status({ statusCode: HttpStatus.OK })
      .message('OK')
      .json(
        {
          data: await this.locationService.getPaddock(state)
        }
      )
    ; 
  }

  @Get('predios/')
  public async property()
  {
    return Response
      .status({ statusCode: HttpStatus.OK })
      .message('OK')
      .json(
        {
          data: await this.locationService.getProperty()
        }
      )
    ; 
  }
  
}