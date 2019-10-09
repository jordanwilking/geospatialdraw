import * as turf from '@turf/turf';
import { Shape } from '../shape-utils';
import { LengthUnit } from './units';
import { GeometryJSON } from './geometry';
/**
 * Creates a full GeometryJSON object from GeoJSON
 *
 * @param id - unique id for geometry
 * @param geometryJSON - base GeoJSON object to extend
 * @param color - CSS color for geometry
 * @param shape - geometry shape
 * @param buffer - buffer size
 * @param bufferUnit - buffer size unit of measurement
 *
 * @returns GeometryJSON
 */
declare const makeGeometry: (id: string, geometryJSON: any, color: string, shape: Shape, buffer?: number, bufferUnit?: LengthUnit) => GeometryJSON;
/**
 * Creates an empty GeometryJSON object
 *
 * @param id - unique id for geometry
 * @param shape - geometry shape
 * @param initialProperties - hash of properties to pass to new GeometryJSON
 *
 * @returns GeometryJSON
 */
declare const makeEmptyGeometry: (id: string, shape: Shape, initialProperties?: object) => GeometryJSON;
/**
 * Creates a buffered GeometryJSON object from a source
 * GeometryJSON object using it's geometry and buffer values
 *
 * @param geo - source GeometryJSON object
 *
 * @returns GeometryJSON with buffer applied
 */
declare const makeBufferedGeo: (geo: GeometryJSON) => GeometryJSON;
/**
 * Converts an arbitrary bbox value from GeoJSON to a 2D extent value
 *
 * @param bbox - 2D/3D GeoJSON bbox value
 *
 * @returns Extent
 */
declare const bboxToExtent: (bbox: turf.helpers.BBox) => [number, number, number, number];
/**
 * Calculates the 2D extent of a GeometryJSON object
 *
 * @param geo - GeometryJSON or Geometry object
 *
 * @returns Extent
 */
declare const geoToExtent: (geo: turf.helpers.Point | turf.helpers.LineString | turf.helpers.Polygon | GeometryJSON) => [number, number, number, number];
export { bboxToExtent, geoToExtent, makeGeometry, makeBufferedGeo, makeEmptyGeometry, };
