// export interface CreateOneBody {
//   age: number;
// }

import { IsNumber } from 'class-validator';

export class CreateOneBody {
  @IsNumber()
  age: number;
}
