export interface ProjectMedia {
  src: string
  poster: string
  label: string
  description: string[]
  aspectRatio?: string
}

export const luminousMedia: ProjectMedia = {
  src: '/luminous/ricoh-e57-demo.mp4',
  poster: '/luminous/ricoh-e57-poster.jpg',
  label: 'Silent video of a Ricoh E57 scan in Hypercliq Splat Viewer',
  description: [
    'The viewer opens an E57 scan captured by Ricoh as a coloured point cloud. The camera moves through the scanned rooms.',
    'The tool marks detected walls, floors, and ceilings with different colours. It then shows wall faces, door and window openings, and a room model around the scan.',
    'The video ends with a view of the extracted building layout and a Splat Viewer feature summary.',
  ],
}

export const splatViewerMedia: ProjectMedia = {
  src: '/splat-viewer/showcase.mp4',
  poster: '/splat-viewer/poster.jpg',
  label: 'Silent walkthrough of Hypercliq Splat Viewer',
  description: [
    'The walkthrough begins inside a Gaussian-splat reconstruction. It shows navigation, object overlays, notes that can be typed or dictated, and camera paths.',
    'A large LiDAR point cloud is opened and explored. The viewer shows how much of the scan is visible and lets the user adjust its GPU memory budget.',
    'The tool detects and colours walls, floors, and ceilings. It shows doors, windows, rooms, and a floor plan derived from the scan.',
    'A laser tool measures distances and areas. The walkthrough also shows the detected geometry being prepared for DXF and IFC export.',
    'A Gaussian splat is trained from a scan and reference photos, then opened in the viewer. The final example opens an E57 scan directly from a scanner export.',
  ],
}

export const renovationMedia: ProjectMedia = {
  src: '/splat-viewer/renovation.mp4',
  poster: '/splat-viewer/renovation-poster.jpg',
  label:
    'Silent edited video of apartment renovation stages in Hypercliq Splat Viewer',
  aspectRatio: '64 / 45',
  description: [
    'The first capture moves through the apartment before renovation, including the balcony and tiled kitchen.',
    'Separate recordings show rooms with finishes removed, the older blue-tiled bathroom, and its stripped walls.',
    'The final capture shows the finished bathroom and shower. Each scan was loaded into the viewer separately; the recordings were edited into one video.',
  ],
}

export const constructionRecognitionMedia: ProjectMedia = {
  src: '/splat-viewer/object-recognition-construction.mp4',
  poster: '/splat-viewer/object-recognition-construction-poster.jpg',
  label:
    'Silent video of YOLO-World detecting backpacks and bottles at a construction site in Splat Viewer',
  aspectRatio: '64 / 45',
  description: [
    'YOLO-World detects backpacks and bottles in a view of the captured construction site.',
    'Splat Viewer shows the detections as coloured 3D boxes, with matching markers on the scan overview.',
  ],
}

export const apartmentRecognitionMedia: ProjectMedia = {
  src: '/splat-viewer/object-recognition-apartment.mp4',
  poster: '/splat-viewer/object-recognition-apartment-poster.jpg',
  label:
    'Silent video of YOLO-World detecting pipes in a renovation scan in Splat Viewer',
  aspectRatio: '64 / 45',
  description: [
    'YOLO-World searches for pipes in a view of an apartment under renovation.',
    'Splat Viewer places the detections in coloured 3D boxes and marks their positions on the scan overview.',
  ],
}
