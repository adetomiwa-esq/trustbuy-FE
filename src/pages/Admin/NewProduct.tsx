import { useRef, useState } from 'react';
import "./Admin.scss"

interface ImageFile {
  file: File;
  preview: string;
}

function NewProduct() {

    const [images, setImages] = useState<ImageFile[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (files: FileList) => {
    const newImages: ImageFile[] = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };
  return (
    <section className="new-product">
        <div className="admin-pg-header">
            <h1 className="hd">Add New Product</h1>
        </div>

        <div className="create-product-form">
            <form action="" className="create-form">
                <div className="info">
                    <label htmlFor="">Product Name</label>
                    <input type="text" className="input-box" />
                </div>

                <div className="info">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" className="desc-box"></textarea>
                </div>


                <div className="flex-info">
                    <div className="price-info">
                        <label htmlFor="">Price</label>
                        <div className="price-box">
                            <div className="currency">$</div>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    
                    <div className="stock-info">
                        <label htmlFor="">Stock Quantity</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>

                <div className="category-info">
                    <label htmlFor="">Category</label>
                    <select name="" id="" className="category-options"></select>
                </div>

                {/* <div className="upload-box">
                    <label htmlFor="">Upload Images</label>
                </div> */}

                <div className="image-uploader">
                    <div className="upload-box" onClick={()=> inputRef.current?.click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        >
                        <div className="upload-content">
                            <div className="icon">📷</div>
                            <p>
                                <strong>Drag & Drop</strong> or Browse to Upload
                            </p>
                            <button type="button" className="upload-btn">
                                Upload Images
                            </button>
                        </div>

                        <input type="file" multiple accept="image/*" ref={inputRef} hidden onChange={handleInputChange} />
                    </div>

                    {images.length > 0 && (
                    <div className="preview-container">
                        {images.map((img, index) => (
                        <div key={index} className="preview-item">
                            <img src={img.preview} alt="preview" />
                            <button type="button" className="remove-btn" onClick={()=> removeImage(index)}
                                >
                                ✕
                            </button>
                        </div>
                        ))}
                    </div>
                    )}
                </div>

                <button className="submit-btn">
                    Save Product
                </button>
            </form>
        </div>
    </section>
  )
}

export default NewProduct