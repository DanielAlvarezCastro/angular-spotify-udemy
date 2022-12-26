import { TrackModel } from './../../core/models/tracks.model';
import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Testing fields input/outputs', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;
    //Act
    const result: TrackModel[] = pipe.transform(data);
    //Assert
    expect(result).toEqual(data);

  })

  it('Testing ASC sort', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;
    const firstValue = data.find((i: any) => i._id === 7);
    const lastValue = data.find((i: any) => i._id === 6);

    //Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'asc');

    //Assert
    expect(result[0]).toEqual(firstValue);
    expect(result[result.length - 1]).toEqual(lastValue);

  })

  it('Testing DESC sort', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;
    const firstValue = data.find((i: any) => i._id === 7);
    const lastValue = data.find((i: any) => i._id === 6);

    //Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'desc');
    const firstResult = result[0];
    const lastResult = result[result.length - 1];

    //Assert
    expect(firstResult).toEqual(lastValue);
    expect(lastResult).toEqual(firstValue);

  })


});
