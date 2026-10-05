export interface ProjectMedia {
  src: string
  poster: string
  label: string
  overview: string[]
  chapters: {
    timestamp: string
    title: string
    paragraphs: string[]
  }[]
  aspectRatio?: string
}

export const luminousMedia: ProjectMedia = {
  src: '/luminous/ricoh-e57-demo.mp4',
  poster: '/luminous/ricoh-e57-poster.jpg',
  label: 'Silent video of a Ricoh E57 scan in Hypercliq Splat Viewer',
  overview: [
    'Explore a Ricoh scan as a coloured point cloud in Splat Viewer.',
    'See detected walls, floors, and ceilings highlighted in different colours.',
    'View the extracted building layout with wall faces, doors, and windows.',
    'Read explanatory cards about supported scans and the viewer’s wider capabilities.',
  ],
  chapters: [
    {
      timestamp: '0:00',
      title: 'Introducing Splat Viewer',
      paragraphs: [
        'A Hypercliq title introduces Splat Viewer for Gaussian splats, LiDAR scans, building geometry, laser measurements, and splat training.',
      ],
    },
    {
      timestamp: '0:04',
      title: 'Exploring the Ricoh E57 capture',
      paragraphs: [
        'The viewer displays the Ricoh capture as a coloured point cloud. The camera looks around rooms containing desks, chairs, windows, and doorways. A scan overview indicates the camera’s position and viewing direction.',
        'An explanatory card identifies E57 as an ASTM exchange format. It says every scan in the file is loaded in colour with its recorded pose applied, and reports 6.4 million points opening in under two seconds.',
      ],
    },
    {
      timestamp: '0:11',
      title: 'Processing the scan',
      paragraphs: [
        'Navigation continues through the captured rooms. A card explains that E57 uses the same processing pipeline as LAS and LAZ, without prior conversion. It names normals and oriented surface elements derived using local PCA, octree level-of-detail processing, and caching.',
      ],
    },
    {
      timestamp: '0:18',
      title: 'Identifying building surfaces',
      paragraphs: [
        'Detected walls become orange, floors blue, and ceilings cyan. Furniture remains visible among the classified surfaces. The explanatory card says detected planes are used to colour points by their surface class.',
      ],
    },
    {
      timestamp: '0:24',
      title: 'Showing the building layout',
      paragraphs: [
        'The view changes to an outside overview of the building. Translucent wall faces outline connected spaces, with door frames in yellow and window frames in cyan. The card describes each wall as a single quadrilateral and the result as a 3D floor plan.',
        'At approximately 0:31, the geometry overlays disappear, leaving the captured building visible from outside. Another card says LAS, LAZ, E57, and PLY files can be opened through the File menu or command line in the same viewer.',
      ],
    },
    {
      timestamp: '0:37',
      title: 'Closing feature summary',
      paragraphs: [
        'A closing card identifies Splat Viewer 0.6 as a Windows application. It lists support for Gaussian splats in PLY and LiDAR scans in LAS, LAZ, and E57.',
        'The card describes GPU visibility culling and depth sorting, and octree streaming of scans exceeding 200 million points on an 8 GB GPU. It also lists building geometry with DXF floor-plan and IFC model export; distance and area measurements with wall-corner snapping and exported measurement annotations; Brush splat training from scans and photographs; typed or dictated notes pinned to viewpoints; recorded camera paths and COLMAP reference photographs; and panorama and labelled multi-view capture.',
        'The closing text names Rust and Vulkan and states that no runtime dependencies are needed beyond a GPU driver.',
      ],
    },
  ],
}

export const splatViewerMedia: ProjectMedia = {
  src: '/splat-viewer/showcase.mp4',
  poster: '/splat-viewer/poster.jpg',
  label: 'Silent walkthrough of Hypercliq Splat Viewer',
  overview: [
    'Explore a captured apartment and compare its photographic reconstruction with a point-cloud view.',
    'Review viewpoint notes, object display options, and a captured panorama.',
    'Navigate LiDAR scans, highlight walkable floor areas, and follow a recorded camera route alongside reference photographs.',
    'Adjust how a large scan is displayed within the available graphics memory.',
    'Extract walls, floors, ceilings, doors, windows, and rooms, then view an exported floor plan.',
    'Measure distances and enclosed areas, including measurements that snap to wall corners.',
    'Train a Gaussian splat from a scan and photographs, then explore the resulting reconstruction.',
  ],
  chapters: [
    {
      timestamp: '0:00',
      title: 'Exploring a Gaussian-splat reconstruction',
      paragraphs: [
        'A Hypercliq title introduces Splat Viewer. The walkthrough begins inside a Gaussian-splat reconstruction of an unfinished apartment, looking around walls, exposed ceiling details, and a balcony doorway.',
        'Explanatory cards describe real-time viewing using Rust and Vulkan, WASD movement, mouse look, and adjustable movement speed, field of view, and splat size. A visible-splat count is highlighted as the viewpoint changes. Another card attributes visibility culling and depth sorting to the GPU.',
        'The rendering switches from a photographic-looking splat to individual points and back. The overview and position readout show the camera’s location, direction, and the extent of the capture.',
      ],
    },
    {
      timestamp: '0:35',
      title: 'Notes and object display options',
      paragraphs: [
        'A list of viewpoint notes appears and a note is selected. Cards explain that notes retain the camera pose so the user can return to that view, and that notes may be typed or dictated. The dictation card states that Whisper transcribes on the device without sending data away.',
        'The object-overlay menu then offers flat 2D boxes, 3D edges, and shaded boxes for displaying detections.',
      ],
    },
    {
      timestamp: '0:53',
      title: 'Capturing panoramas and labelled views',
      paragraphs: [
        'Capture menus show panorama resolution choices and labelled dataset export. Cards describe panoramas up to 8K and captured views containing RGB images, per-pixel point indices, and world XYZ coordinates. The File menu also presents loading options for point clouds, bounding boxes, camera paths, and reference photographs.',
        'At approximately 1:10, a panorama captured from the viewer fills the screen. The view pans across the apartment’s walls, ceiling, floor, and balcony doorway. Its explanatory card describes an equirectangular PNG output up to 8192 × 4096 pixels.',
      ],
    },
    {
      timestamp: '1:19',
      title: 'Loading and exploring a LiDAR scan',
      paragraphs: [
        'A loading progress dialog appears, followed by navigation through a dense LiDAR point cloud. Cards identify the example as a 974 MB scan containing 36.5 million points and describe loading on a background worker.',
        'The scan is shown as surface elements whose spacing, according to the overlay, is derived from the captured data. The rendering switches to raw points to inspect the sampling.',
        'At approximately 1:44, detected floor cells are highlighted in green as a walkable-area overlay, showing potential standing locations. The overlay is subsequently removed.',
      ],
    },
    {
      timestamp: '1:53',
      title: 'Following the recorded capture route',
      paragraphs: [
        'An orange recorded camera trajectory appears in the scene. Playback follows the sensor’s route through the scan. Cards explain that a route can be played at an adjustable speed or scrubbed to a chosen moment.',
        'A reference-photo panel changes with the viewpoint. Its card describes matching the nearest photograph from a COLMAP dataset.',
      ],
    },
    {
      timestamp: '2:22',
      title: 'Managing a larger scan',
      paragraphs: [
        'Another scan is introduced as containing 216 million points on an 8 GB GPU. Cards explain that the full scan is held in host memory while octree streaming supplies the current view to GPU memory.',
        'A highlighted GPU-memory budget control changes the resident point set. The explanatory text says the finest level of detail is prioritised where the camera looks.',
      ],
    },
    {
      timestamp: '2:34',
      title: 'Extracting building geometry',
      paragraphs: [
        'Detected walls, floors, and ceilings receive orange, blue, and cyan class colours. Bordered translucent polygons outline the surfaces, and the overview becomes a floor plan.',
        'Wall faces are then shown with yellow door frames and cyan window frames. Cards describe each wall as a single quadrilateral extending between corners. The room stage describes enclosed spaces with their areas, ceiling heights, and boundary polygons.',
      ],
    },
    {
      timestamp: '3:02',
      title: 'Exporting and viewing the floor plan',
      paragraphs: [
        'The export menu is shown. An explanatory card describes DXF output with wall thicknesses, dimensions, door swings, and room labels, and also mentions JSON output.',
        'At approximately 3:10, the exported DXF floor plan fills the screen. It contains walls, dimensions, door swings, windows, and labelled rooms with areas. The accompanying card describes opening the output in CAD software.',
      ],
    },
    {
      timestamp: '3:19',
      title: 'Measuring distances and areas',
      paragraphs: [
        'A laser-style tool displays the distance to the surface at which the view is aimed. Selecting two points creates a labelled measurement line, first between walls and then from floor to ceiling.',
        'Cards explain horizontal and vertical measurement components and intersection with fitted planes. One card claims sub-centimetre accuracy on flat surfaces.',
        'Measurements then snap to detected wall corners. The card specifies a 10 cm snapping range. Further points form a boundary; closing the boundary produces an area and perimeter readout.',
        'The measurements remain drawn in the scene and listed in the panel. At approximately 3:46, a card says they are saved alongside the scan and included in exports as a DXF MEASURE layer and IFC annotations.',
      ],
    },
    {
      timestamp: '3:52',
      title: 'Training a Gaussian splat',
      paragraphs: [
        'The Gaussian-splat training command opens a configuration dialog using the scan and posed photographs. Cards identify Brush as the trainer and describe initialising flat Gaussians on the scanned surfaces at 5 cm spacing, rather than starting from sparse structure-from-motion points.',
        'A training progress panel shows iteration, splat-count, and image-quality information. A card says the scan is streamed out of GPU memory during training.',
        'At approximately 4:16, a later card describes a result after twenty minutes, names 20,000 iterations as the default, and says the result can be loaded with one click.',
      ],
    },
    {
      timestamp: '4:27',
      title: 'Exploring the trained result',
      paragraphs: [
        'The trained Gaussian splat opens and the camera explores the apartment again. A card explains that the result uses the scan’s coordinate frame and that a haze control suppresses faint Gaussians.',
        'The final message connects three outputs from one capture: LiDAR for measurement, a floor plan for CAD and BIM, and a splat for a photographic walkthrough.',
      ],
    },
  ],
}

export const renovationMedia: ProjectMedia = {
  src: '/splat-viewer/renovation.mp4',
  poster: '/splat-viewer/renovation-poster.jpg',
  label:
    'Silent edited video of apartment renovation stages in Hypercliq Splat Viewer',
  aspectRatio: '64 / 45',
  overview: [
    'Explore the apartment’s older rooms, tiled kitchen, and balcony.',
    'Compare stripped surfaces and exposed services with a later kitchen installation.',
    'Follow the bathroom from its older blue-tiled appearance through stripped masonry and exposed pipework to new tiling and a glass shower.',
    'The video joins separate recordings of captures made at different renovation stages.',
  ],
  chapters: [
    {
      timestamp: '0:00',
      title: 'Separate captures of renovation stages',
      paragraphs: [
        'This edit joins separate Splat Viewer recordings of apartment captures at different renovation stages. Each stage was loaded and explored separately.',
      ],
    },
    {
      timestamp: '0:02',
      title: 'The older kitchen and adjoining spaces',
      paragraphs: [
        'The first capture moves from a room with parquet flooring into the older tiled kitchen. The camera looks towards the balcony and into a small adjoining space containing a ladder.',
      ],
    },
    {
      timestamp: '0:14',
      title: 'Stripped surfaces and kitchen installation',
      paragraphs: [
        'Separate views show the kitchen with wall finishes removed, exposed masonry at an opening, visible service routes, and renovation materials.',
        'At approximately 0:26, a later kitchen capture shows new cabinetry and fitted appliances, with materials still present during installation.',
      ],
    },
    {
      timestamp: '0:31',
      title: 'The older bathroom',
      paragraphs: [
        'The edit returns to the older bathroom. Blue wall and floor tiles surround a bathtub, basin, toilet, and bidet. Dark staining is visible around the ceiling edges.',
      ],
    },
    {
      timestamp: '0:40',
      title: 'The stripped bathroom and exposed pipework',
      paragraphs: [
        'Subsequent captures show the bathroom stripped to masonry. The old fixtures have been removed. A later view shows exposed pipe runs across the walls and floor.',
      ],
    },
    {
      timestamp: '0:50',
      title: 'New tiling and shower enclosure',
      paragraphs: [
        'The final capture shows the newly tiled bathroom and a glass shower enclosure with black fittings. Some service openings remain visible. The camera looks around the shower before the video fades out.',
      ],
    },
  ],
}

export const constructionRecognitionMedia: ProjectMedia = {
  src: '/splat-viewer/object-recognition-construction.mp4',
  poster: '/splat-viewer/object-recognition-construction-poster.jpg',
  label:
    'Silent video of YOLO-World detecting backpacks and bottles at a construction site in Splat Viewer',
  aspectRatio: '64 / 45',
  overview: [
    'Find candidate backpacks and bottles in views of an unfinished construction site.',
    'See detections from several views combined into coloured 3D boxes.',
    'Explore the labelled results and their matching positions on the scan overview.',
  ],
  chapters: [
    {
      timestamp: '0:00',
      title: 'Preparing captured views for detection',
      paragraphs: [
        'The opening image compares a colour rendering of the construction capture with a multicoloured per-pixel point-index image. Its explanatory text says point indices and XYZ coordinates are saved as GeoTIFF.',
        'A title then introduces YOLO-World detection of backpacks and bottles. Views around the unfinished site show coloured, labelled 2D detection boxes. The explanatory overlay describes open-vocabulary detection, a separate colour for each object, and mapping detections back into 3D using the XYZ layer.',
      ],
    },
    {
      timestamp: '0:15',
      title: 'Combining detections into 3D boxes',
      paragraphs: [
        'A title explains that detections from multiple views are combined into 3D bounding boxes for display in the viewer.',
      ],
    },
    {
      timestamp: '0:17',
      title: 'Exploring the reported detections',
      paragraphs: [
        'Splat Viewer reports 12 detections for the bottle and backpack prompts. The camera explores the results around bags, floor-level objects, hanging items, and other site equipment.',
        'Coloured 3D boxes carry object labels and confidence scores. Matching coloured markers locate the results on the scan overview. The boxes remain positioned in the captured scene as the viewpoint changes.',
        'Some labelled boxes overlap other site objects, including a fire extinguisher and a large outdoor unit. These are reported detections rather than independently verified object identifications.',
      ],
    },
  ],
}

export const apartmentRecognitionMedia: ProjectMedia = {
  src: '/splat-viewer/object-recognition-apartment.mp4',
  poster: '/splat-viewer/object-recognition-apartment-poster.jpg',
  label:
    'Silent video of YOLO-World detecting pipes in a renovation scan in Splat Viewer',
  aspectRatio: '64 / 45',
  overview: [
    'Search an apartment renovation capture for candidate pipes and related objects.',
    'See detections from several views combined into coloured 3D boxes.',
    'Explore candidate locations, including coils and exposed runs, with matching markers on the scan overview.',
  ],
  chapters: [
    {
      timestamp: '0:00',
      title: 'Preparing captured views and detecting candidates',
      paragraphs: [
        'The opening image compares the apartment’s colour rendering with a multicoloured per-pixel point-index image. Text explains that point indices and XYZ coordinates are saved as GeoTIFF.',
        'A title then introduces YOLO-World detection using the prompt “pipe.” Rendered views show labelled 2D boxes over candidate pipe-related objects, including coils and exposed runs. The explanatory overlay describes open-vocabulary detection, a separate colour for each object, and mapping detections into 3D using the XYZ layer.',
      ],
    },
    {
      timestamp: '0:15',
      title: 'Combining detections across views',
      paragraphs: [
        'A title explains that detections from different views are combined into 3D bounding boxes for display in the viewer.',
      ],
    },
    {
      timestamp: '0:17',
      title: 'Exploring candidate pipe locations',
      paragraphs: [
        'The viewer reports 10 detections and displays a broader list of pipe-related prompts, including plumbing and drain pipes, hoses, and conduit.',
        'The camera explores coloured boxes around coils, exposed floor-level runs, and other candidate locations throughout the apartment. Labels and confidence scores accompany the boxes. Matching colours locate the results on the scan overview, while the boxes remain positioned in the scene as the viewpoint changes.',
        'Some boxes overlap a ladder, radiator, or apparently plain surfaces. The displayed results are candidates rather than ten independently verified plumbing pipes.',
      ],
    },
  ],
}
