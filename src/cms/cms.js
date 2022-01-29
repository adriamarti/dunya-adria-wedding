import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import InfoPagePreview from './preview-templates/InfoPagePreview';
import ConfirmationComponentPreview from './preview-templates/ConfirmationComponentPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('info', InfoPagePreview);
CMS.registerPreviewTemplate('confirmation', ConfirmationComponentPreview);
