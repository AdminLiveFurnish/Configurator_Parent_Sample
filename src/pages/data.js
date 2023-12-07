export const navTabs = [
  {
    id: 1,
    name: "SKATE GUARDS",
    href: "#silo",
  },
  {
    id: 2,
    name: "SOAKERS",
    href: "#lifestyle",
  },
  {
    id: 3,
    name: "SK8TAPE",
    href: "#configurator",
  },
  {
    id: 4,
    name: "APPAREL",
    href: "#AR",
  },
  {
    id: 5,
    name: "DEALER",
    href: "#viewer3d",
  },
];

export const imagesSilo = [
  {
    id: 1,
    imageSrc: "/images/silo/image_A.jpg",
  },
  {
    id: 2,
    imageSrc: "/images/silo/image_B.jpg",
  },
  {
    id: 3,
    imageSrc: "/images/silo/image_C.jpg",
  },
];

export const imagesLifestyle = [
  {
    id: 1,
    imageSrc: "/images/lifestyle/image_Camera_1.jpg",
  },
  {
    id: 2,
    imageSrc: "/images/lifestyle/image_Camera_2.jpg",
  },
  {
    id: 3,
    imageSrc: "/images/lifestyle/image_Camera_3.jpg",
  },
];

export const scenesData = {
  link: "ModelViewer/1",
  imgsrc: "SkramProductImages/9.jpg",
  title: "sectional",
  textureJSONId: 1,
  sceneData: {
    models: [
      {
        modelLink: "/models/sectional/sectional.glb",
        modelInitPos: [0, 0, 5],
        modelInitRot: [0, 0, 0],
        modelInitScl: [1, 1, 1],
      },
    ],
    modelTop: 0.9,
    modelBottom: 0,
    modelRight: 0.955,
    modelLeft: -1.955,
    modelFront: 2.175,
    modelBack: -0.925,
    modelCushion: 0.475,
    modelMeasureGap: 0.05,
    textHeight: '35.4" / 90cm',
    textDepth: '122" / 310cm',
    textWidth: '144.5" / 291cm',
    textCushion: '18" / 46cm',
    measureTextSize: 0.05,
    sceneBgColor: "#fbfafb",
    cameraFOV: 10,
    cameraNearPlane: 0.01,
    cameraFarPlane: 75,
    cameraInitPos: [-20, 1.5, 20],
    cameraMinZoom: 4,
    cameraMaxZoom: 50,
    cameraTargetPos: [0, 0.3, 0],
    lights: [
      {
        type: "Directional",
        color: "#ffffff",
        intensity: 1,
        position: [1, 1, 1],
      },
      {
        type: "Directional",
        color: "#ffffff",
        intensity: 1,
        position: [-1, -1, -1],
      },
      { type: "Ambient", color: "#555555" },
    ],
  },
  textures: [
    {
      id: 0,
      name: "Body",
      value: "fabric",
      repeat: [1, 1],
      offset: [0, 0],
      textures: [
        {
          id: 1,
          name: "White",
          texture:
            "../models/sectional/textures/White.jpg",
          normal: "../models/sectional/textures/normal.jpg",
          // orm: "../models/sectional/textures/orm.jpg",
          thumbnail:
            "../models/sectional/textures/White_t.jpg",
          isDefault: true,
        },
        {
          id: 2,
          name: "Blue",
          texture: "../models/sectional/textures/Blue.jpg",
          normal: "../models/sectional/textures/normal.jpg",
          // orm: "../models/sectional/textures/orm.jpg",
          thumbnail: "../models/sectional/textures/Blue_t.jpg",
        },
        {
          id: 4,
          name: "Green",
          texture: "../models/sectional/textures/Green.jpg",
          normal: "../models/sectional/textures/normal.jpg",
          // orm: "../models/sectional/textures/orm.jpg",
          thumbnail: "../models/sectional/textures/Green_t.jpg",
        },
        {
          id: 5,
          name: "Red",
          texture:
            "../models/sectional/textures/Red.jpg",
          normal: "../models/sectional/textures/normal.jpg",
          // orm: "../models/sectional/textures/orm.jpg",
          thumbnail:
            "../models/sectional/textures/Red_t.jpg",
        },
        {
          id: 6,
          name: "Leaves",
          texture: "../models/sectional/textures/Print.jpg",
          normal: "../models/sectional/textures/normal.jpg",
          // orm: "../models/sectional/textures/orm.jpg",
          thumbnail: "../models/sectional/textures/Print_t.jpg",
        },
      ],
    },
    // {
    //   id: 1,
    //   name: "Legs",
    //   value: "legs",
    //   repeat: [1, 1],
    //   offset: [0, 0],
    //   textures: [
    //     {
    //       id: 10,
    //       name: "Gold",
    //       texture: "../models/sectional/textures/diffuse.jpg",
    //       normal: "../models/sectional/textures/normal.jpg",
    //       orm: "../models/sectional/textures/orm.jpg",
    //       thumbnail: "../models/sectional/textures/diffuse.jpg",
    //       isDefault: true,
    //     },
    //     {
    //       id: 11,
    //       name: "Black Nickel",
    //       texture: "../models/sectional/textures/Frame_Doe/diffuse.jpg",
    //       normal: "../models/sectional/textures/Frame_Doe/normal.jpg",
    //       orm: "../models/sectional/textures/Frame_Doe/orm.jpg",
    //     },
    //     {
    //       id: 12,
    //       name: "Wood 19",
    //       texture: "../models/sectional/textures/diffuse.jpg",
    //       normal: "../models/sectional/textures/normal.jpg",
    //       orm: "../models/sectional/textures/orm.jpg",
    //       thumbnail: "../models/sectional/textures/diffuse.jpg",
    //     },
    //     {
    //       id: 13,
    //       name: "Wood 43",
    //       texture: "../models/sectional/textures/diffuse.jpg",
    //       normal: "../models/sectional/textures/normal.jpg",
    //       orm: "../models/sectional/textures/orm.jpg",
    //       thumbnail: "../models/sectional/textures/diffuse.jpg",
    //     },
    //     {
    //       id: 14,
    //       name: "Wood 44",
    //       texture: "../models/sectional/textures/diffuse.jpg",
    //       normal: "../models/sectional/textures/normal.jpg",
    //       orm: "../models/sectional/textures/orm.jpg",
    //       thumbnail: "../models/sectional/textures/diffuse.jpg",
    //     },
    //   ],
    // },
  ],
};
