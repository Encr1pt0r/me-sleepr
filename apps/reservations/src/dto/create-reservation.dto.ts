export class CreateReservationDto {
  startData: Date;
  endDate: Date;
  userId: string;
  placeId: string;
  invoice: string;
}
