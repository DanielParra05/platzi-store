import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (!val) {
      throw new BadRequestException(
        'Nea, mandaste un string y necesitamos un number',
      );
    }
    return val;
  }
}
