import { Injectable, Inject} from '@nestjs/common';

@Injectable()
export class DataBaseService{
  constructor(@Inject('dbconnection') private readonly postgresql){
  }

  public Query(sqlSentence) {
    return new Promise((resolve, reject) => {
      this.postgresql.query(
        sqlSentence,
        (err, result) => {
          return(err) ? reject(err) : resolve(result.rows)   
        });
    });
  }
}