import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";

function Sidebar() {
  return (
    <div className="w-full md:w-1/3 space-y-6">
      {/* INVITE CARD */}
      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          Invite DOCTOR VELMA’S family and friends
        </h3>

        <Button
          fullWidth
          variant="contained"
          className="!bg-red-700 !text-white hover:!bg-red-800"
        >
          Invite now
        </Button>
      </div>

      {/* SHARE FACEBOOK */}
      <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center justify-center">
        <Button
          variant="text"
          startIcon={<TwitterIcon />}
          className="!text-black normal-case"
        >
          Share on X
        </Button>
      </div>

      {/* NOTIFICATION PREFERENCES */}
      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">
          Notification preferences
        </h3>

        <p className="text-xs text-gray-500 mb-3">You are not subscribed</p>

        <Button fullWidth variant="outlined" className="normal-case">
          Subscribe
        </Button>
      </div>

      {/* PHOTOS PREVIEW */}
      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">17 Photos</h3>

        <img
          src="/images/test.png"
          alt="Latest photo"
          className="w-full h-40 object-cover rounded-md mb-3"
        />

        <Button fullWidth variant="outlined" className="normal-case">
          Add photos
        </Button>
      </div>

      {/* RECENT UPDATES */}
      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">
          Recent updates
        </h3>

        <p className="text-xs text-gray-500 mb-1">Thursday, October 16</p>

        <p className="text-sm text-gray-700">
          Association of General Practitioners of Jamaica added 2 stories.
        </p>
      </div>

      {/* ADMIN INFO */}
      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <p className="text-xs text-gray-600">
          This website is administered by:
        </p>

        <p className="text-sm text-red-800 font-medium mt-1">
          Association of General Practitioners of Jamaica
        </p>
      </div>

      {/* VIEWS */}
      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <p className="text-sm text-gray-700 font-medium">2,626 Views</p>

        <p className="text-xs text-gray-500 mt-1">Open access</p>
      </div>

      {/* FOOTER LINK */}
      <div className="text-center text-sm text-red-800 cursor-pointer hover:underline">
        Have a suggestion? Contact us →
      </div>
    </div>
  );
}

export default Sidebar;
