import { ServiceRespository } from '@avam/convenience';
import { AmpsConnectionInfoServiceName } from './constants';
import { AmpsConnectionInfoApi } from './amps-coninfo-api';

export function initApi() {
  ServiceRespository.register(
    AmpsConnectionInfoServiceName,
    new AmpsConnectionInfoApi('http://localhost:3000/api/')
  );
}
