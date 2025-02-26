import { Link, useParams } from "react-router-dom";
import { apps } from "../data";
import { Helmet } from "react-helmet";
import { FaCheckCircle, FaApple, FaAndroid } from "react-icons/fa";
import Application from "./Application";

const SinglePage = () => {
  const { id } = useParams();
  const page = apps.find((item) => item.id == +id);

  return (
    <>
      <Helmet>
        <title>{page.title} | At AppFactory</title>
        <meta name="description" content={page.alt_description} />
        <meta name="keywords" content={page.tags?.join(", ")} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.alt_description} />
      </Helmet>

      <section className=" md:pt-0 mb-10" id="home">
        <div className="max-w-6xl m-auto ">
          <div className="text-md breadcrumbs mb-3 ml-10 md:ml-0">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">Application</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="border-white border p-2 max-w-max md:mx-10  mx-auto md:ml-0">
              <img src={page.src} width="200" height="200" alt="whatsapp" />
            </div>
            <div className="text-left  mt-4">
              <div className="md:text-left text-center w-full ">
                <h1 className="md:text-3xl text-xl text-info font-bold mb-2">
                  {page.title}
                </h1>
                <p className="text-base sm:text-lg text-primary">
                  {page.alt_description}
                </p>
              </div>

              <div className="mt-10 flex flex-col md:flex-row  gap-5 max-w-max md:mx-0  mx-auto ">
                <a
                  href={page.ios}
                  target="blank"
                  className="relative  flex h-11  w-44 md:w-48 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800"
                >
                  <span className="relative md:text-base text-sm  font-semibold text-white lg:text-primary lg:dark:text-white flex items-center gap-2">
                    <FaApple />
                    IOS Download
                  </span>
                </a>
                <a
                  href={page.android}
                  target="blank"
                  className="relative  flex h-11  w-44 md:w-48 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800"
                >
                  <span className="relative md:text-base   text-sm  font-semibold text-white  lg:text-primary lg:dark:text-white flex items-center gap-2">
                    <FaAndroid />
                    Android Download
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28  text-center p-20  bg-white">
          <div className="max-w-6xl m-auto ">
            <div className="p-5 md:p-10">
              <h2 className="text-2xl md:text-5xl font-bold text-black md:mb-8 mb-4 ">
                {page.title}
              </h2>
              <p className="md:max-w-2xl m-0 md:m-auto max-w-max  text-secondary text-sm md:text-xl">
                {page.description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100" id="about">
          <div className="max-w-6xl m-auto ">
            <div className="text-center mb-10">
              <h2 className="text-3xl text-black font-semibold p-10">
                Steps & benefits
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-20 items-center mb-20 grid-cols-1">
              <div>
                <img
                  src="https://licenseware.io/wp-content/uploads/2022/11/MDM-Upload-1.png"
                  alt="upload"
                  className="object-cover"
                />
              </div>

              <div className="ml-10 ">
                <div>
                  <h2 className="text-3xl text-black">Upload</h2>
                </div>
                <div className="mt-5">
                  <p
                    className="flex gap-2
                items-center mb-2 text-black"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />
                    <span className="text-black">
                      Drag and drop files to upload
                    </span>
                  </p>

                  <p
                    className="flex gap-4
                items-center mb-2 text-black"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />
                    <span className="text-black">
                      Data is validated automatically
                    </span>
                  </p>

                  <p
                    className="flex gap-4
                items-center mb-2 text-black"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />
                    <span className="text-black"> Click process</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-20 items-center mb-20 grid-cols-1">
              <div className="ml-10">
                <div>
                  <h2 className="text-3xl text-black">Reports</h2>
                </div>
                <div className="mt-5">
                  <p
                    className="flex gap-2
                items-center mb-2"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />

                    <span className="text-black">
                      {" "}
                      Identify licensing requirements
                    </span>
                  </p>

                  <p
                    className="flex gap-4
                items-center mb-2"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />

                    <span className="text-black">
                      Understood analysis steps taken
                    </span>
                  </p>

                  <p
                    className="flex gap-4
                items-center mb-2"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />

                    <span className="text-black">
                      Surface the required evidence
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="https://licenseware.io/wp-content/uploads/2022/11/MDM-Reports.png"
                  alt="upload"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-20 items-center mb-20 grid-cols-1">
              <div>
                <img
                  src="https://licenseware.io/wp-content/uploads/2022/11/MDM-Data.png"
                  alt="upload"
                  className="object-cover"
                />
              </div>

              <div className="ml-10">
                <div>
                  <h2 className="text-3xl text-black">Data Sources</h2>
                </div>
                <div className="mt-5">
                  <p
                    className="flex gap-2
                items-center mb-2"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />
                    <span className="text-black">
                      Any data source, you name it
                    </span>
                  </p>

                  <p
                    className="flex gap-4
                items-center mb-2"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />
                    <span className="text-black">
                      Integration with Red Hot Discovery tool
                    </span>
                  </p>

                  <p
                    className="flex gap-4
                items-center mb-2"
                  >
                    <FaCheckCircle className="text-black bg-black rounded-lg" />
                    <span className="text-black">
                      {" "}
                      Static upload or API integration
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Application />
        </div>
      </section>
    </>
  );
};

export default SinglePage;
