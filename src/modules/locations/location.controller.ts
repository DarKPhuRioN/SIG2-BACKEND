import { Get, Controller,   HttpStatus} from '@nestjs/common';
import { LocationService } from './location.service';
import Response  from './../../common/Response/response';


@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('getAll')
  public async getLocations() {
    return Response
      .status(HttpStatus.OK)
      .json(await this.locationService.getLocations()
    );
  }
  
  @Get('getCultivos')
  public async getCultivos() {
    return Response.status(HttpStatus.OK).json(await this.locationService.getCultivos());
  }

  @Get('test')
  public async get(){
    return Response
      .status({ statusCode: HttpStatus.OK })
      .message('OK')
      .json(
        {
          data: await this.locationService.get()
        }
      )
    ; 
  }
}
