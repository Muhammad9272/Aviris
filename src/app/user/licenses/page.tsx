'use client';

import { useState, useRef, useEffect } from 'react';

interface License {
  id: number;
  licenseId: string;
  email: string;
  isYou?: boolean;
  slots: number;
  expiresOn: string;
  status: 'Active' | 'Disabled' | 'Pending';
}

export default function LicenseManagement() {
  useEffect(() => {
    document.title = 'Licenses - AVIRIS | Team Access & Devices';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Manage your AVIRIS licenses, invite team members, allocate device slots, track license status, and control access to your organization\'s security resources and features.');
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showActionMenu, setShowActionMenu] = useState<number | null>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCancelSlotModal, setShowCancelSlotModal] = useState(false);
  const [showRemoveMemberModal, setShowRemoveMemberModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAddSlotModal, setShowAddSlotModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showInviteTooltip, setShowInviteTooltip] = useState(false);
  const [newSlotsCount, setNewSlotsCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [inviteEmail, setInviteEmail] = useState('');
  const [slotAllocation, setSlotAllocation] = useState(1);
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const statusDropdownRef = useRef<HTMLDivElement>(null);
  const actionMenuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const [licenses, setLicenses] = useState<License[]>([
    {
      id: 1,
      licenseId: '587MJF91R66V',
      email: 'carlomercado@gmail.com',
      isYou: true,
      slots: 0,
      expiresOn: '04 Dec. 2026',
      status: 'Active'
    },
    {
      id: 2,
      licenseId: '587MJF91R66V',
      email: 'liam.smith@techworld.net',
      isYou: false,
      slots: 2,
      expiresOn: '04 Dec. 2026',
      status: 'Active'
    },
    {
      id: 3,
      licenseId: '587MJF91R66V',
      email: 'ava.brown@designstudio.org',
      isYou: false,
      slots: 2,
      expiresOn: '04 Dec. 2026',
      status: 'Disabled'
    },
    {
      id: 4,
      licenseId: '587MJF91R66V',
      email: 'noah.johnson@marketingpro.com',
      isYou: false,
      slots: 1,
      expiresOn: '04 Dec. 2026',
      status: 'Active'
    },
    {
      id: 5,
      licenseId: '587MJF91R66V',
      email: 'isabella.wilson@financesolutions.com',
      isYou: false,
      slots: 1,
      expiresOn: '04 Dec. 2026',
      status: 'Active'
    },
    {
      id: 6,
      licenseId: '587MJF91R66V',
      email: 'ethan.miller@healthcareconnect.com',
      isYou: false,
      slots: 1,
      expiresOn: '04 Dec. 2026',
      status: 'Active'
    },
    {
      id: 7,
      licenseId: '587MJF91R66V',
      email: 'some.one@aviris.com',
      isYou: false,
      slots: 1,
      expiresOn: '04 Dec. 2026',
      status: 'Pending'
    }
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target as Node)) {
        setShowStatusDropdown(false);
      }
      
      if (showActionMenu !== null) {
        const menuRef = actionMenuRefs.current[showActionMenu];
        if (menuRef && !menuRef.contains(event.target as Node)) {
          setShowActionMenu(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showActionMenu]);

  const totalSlots = licenses.reduce((sum, license) => sum + license.slots, 0) + licenses.filter(l => l.isYou).length;
  const activeSlots = licenses.filter(l => l.status === 'Active').reduce((sum, license) => sum + license.slots, 0) + licenses.filter(l => l.isYou && l.status === 'Active').length;
  const emptySlots = 2;
  const availableSlots = 4;

  const filteredLicenses = licenses.filter(license => {
    const matchesSearch = 
      license.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.licenseId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'All' ||
      (statusFilter === 'Active Only' && license.status === 'Active') ||
      (statusFilter === 'Pending Only' && license.status === 'Pending') ||
      (statusFilter === 'Disabled Only' && license.status === 'Disabled');
    
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredLicenses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLicenses = filteredLicenses.slice(startIndex, endIndex);

  // Helper functions
  const getStatusBadgeClass = (status: string) => {
    const statusMap: Record<string, string> = {
      'Active': 'badge-success-custom',
      'Disabled': 'badge-danger-custom',
      'Pending': 'badge-warning-custom'
    };
    return statusMap[status] || 'badge-secondary-custom';
  };

  const resetModalState = () => {
    setInviteEmail('');
    setSlotAllocation(1);
    setSelectedLicense(null);
    setConfirmRemove(false);
  };

  // Event handlers
  const handleSendInvitation = () => {
    setShowInviteModal(false);
    setShowSuccessModal(true);
  };

  const handleEditLicense = (license: License) => {
    setSelectedLicense(license);
    setInviteEmail(license.email);
    setSlotAllocation(license.slots || 1);
    setShowActionMenu(null);
    setShowEditModal(true);
  };

  const handleConfirmChanges = () => {
    setShowEditModal(false);
    resetModalState();
  };

  const handleRemoveMember = () => {
    setShowRemoveMemberModal(false);
    resetModalState();
  };

  const handleCancelSlots = () => {
    setShowCancelSlotModal(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    resetModalState();
  };

  const handleAddSlots = () => {
    setShowAddSlotModal(false);
    setNewSlotsCount(1);
  };

  const adjustSlotCount = (increment: boolean) => {
    if (increment) {
      setSlotAllocation(prev => prev + 1);
    } else {
      setSlotAllocation(prev => Math.max(1, prev - 1));
    }
  };

  const adjustNewSlots = (increment: boolean) => {
    setNewSlotsCount(prev => increment ? prev + 1 : Math.max(1, prev - 1));
  };

  const needsMoreSlots = slotAllocation > availableSlots;

  return (
    <>
      <div className="main-content-wrapper">
        <div className="card-custom p-4 mb-4">
        {/* Header */}
        <div className="d-flex align-items-start align-items-sm-center gap-2 gap-sm-3 mb-4">
          <div className="stat-icon badge-success-custom flex-shrink-0">
            <i className="ri-shield-keyhole-line"></i>
          </div>
          <div className="flex-grow-1 min-w-0">
            <h2 className="welcome-heading mb-1 fs-5 fs-md-4">License Management</h2>
            <p className="welcome-description mb-0 small">Manage and control license access for your team members.</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3 mb-4">
          
          <div className="d-flex flex-column flex-sm-row gap-2 w-100 w-lg-auto">
            {/* Search */}
            <div className="position-relative flex-grow-1" style={{minWidth: '250px'}}>
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search license/users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="ri-search-line position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            </div>

            {/* Status Filter */}
            <div ref={statusDropdownRef} className="position-relative" style={{minWidth: '150px'}}>
              <button
                className="btn btn-outline-custom w-100 d-flex align-items-center justify-content-between gap-2 h-100"
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                style={{height: '42px'}}
              >
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-filter-3-line"></i>
                  Status: {statusFilter}
                </span>
                <i className={`ri-arrow-${showStatusDropdown ? 'up' : 'down'}-s-line`}></i>
              </button>
              {showStatusDropdown && (
                <div className="custom-dropdown-menu show" style={{minWidth: '180px'}}>
                  {['All', 'Active Only', 'Pending Only', 'Disabled Only'].map((status) => (
                    <button
                      key={status}
                      className={`custom-dropdown-item ${statusFilter === status ? 'active' : ''}`}
                      onClick={() => {
                        setStatusFilter(status);
                        setShowStatusDropdown(false);
                      }}
                    >
                      <span className="d-flex align-items-center justify-content-between w-100">
                        <span>{status}</span>
                        {statusFilter === status && <i className="ri-checkbox-circle-line"></i>}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <button 
              className="btn btn-success-custom d-flex align-items-center justify-content-center gap-2"
              onClick={() => setShowInviteModal(true)}
            >
              <i className="ri-user-add-line"></i>
              Invite Member
            </button>
            <button 
              className="btn btn-primary-custom d-flex align-items-center justify-content-center gap-2"
              onClick={() => setShowAddSlotModal(true)}
            >
              <i className="ri-add-line"></i>
              Add Slot(s)
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="license-stat-card">
              <div className="license-stat-icon bg-light">
                <i className="ri-archive-line text-secondary"></i>
              </div>
              <div>
                <div className="license-stat-value">{totalSlots}</div>
                <div className="license-stat-label">Total Slots</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="license-stat-card">
              <div className="license-stat-icon" style={{background: 'rgba(22, 163, 74, 0.1)'}}>
                <i className="ri-shield-check-line" style={{color: 'var(--aviris-secondary)'}}></i>
              </div>
              <div>
                <div className="license-stat-value">{activeSlots}</div>
                <div className="license-stat-label">Active Slots</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="license-stat-card">
              <div className="license-stat-icon bg-light">
                <i className="ri-inbox-line text-muted"></i>
              </div>
              <div>
                <div className="license-stat-value">{emptySlots}</div>
                <div className="license-stat-label">Empty Slots</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th style={{width: '60px'}}>ID</th>
                <th style={{width: '150px'}}>License ID</th>
                <th>Email Address</th>
                <th style={{width: '100px'}}>Slots</th>
                <th style={{width: '130px', whiteSpace: 'nowrap', fontSize: '0.875rem'}}>Expires on</th>
                <th style={{width: '120px'}}>Status</th>
                <th style={{width: '80px'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentLicenses.map((license) => (
                <tr key={license.id}>
                  <td className="fw-medium text-muted">{license.id}-</td>
                  <td className="fw-semibold">{license.licenseId}</td>
                  <td>
                    {license.email}
                    {license.isYou && (
                      <span className="badge-custom badge-info-custom ms-2">You</span>
                    )}
                  </td>
                  <td>
                    {license.slots > 0 ? (
                      <span><span className="fw-bold">{license.slots}</span> slots</span>
                    ) : (
                      <span className="text-muted">-</span>
                    )}
                  </td>
                  <td className="fw-semibold" style={{whiteSpace: 'nowrap', fontSize: '0.875rem'}}>{license.expiresOn}</td>
                  <td>
                    <span className={`badge-custom ${getStatusBadgeClass(license.status)}`}>
                      {license.status}
                    </span>
                  </td>
                  <td>
                    <div className="position-relative" ref={el => actionMenuRefs.current[license.id] = el}>
                      <button
                        className="btn btn-sm text-secondary px-3 py-2 text-decoration-none"
                        onClick={() => setShowActionMenu(showActionMenu === license.id ? null : license.id)}
                        style={{
                          border: '1px solid #e2e8f0',
                          background: 'white',
                          borderRadius: '8px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
                        }}
                      >
                        <i className="ri-more-2-fill" style={{display: 'block'}}></i>
                      </button>
                      {showActionMenu === license.id && (
                        <div className="custom-dropdown-menu show position-absolute end-0" style={{minWidth: '180px', zIndex: 1050}}>
                          <button 
                            className="custom-dropdown-item"
                            onClick={() => handleEditLicense(license)}
                          >
                            <i className="ri-edit-line me-2"></i>
                            Edit Details
                          </button>
                          {license.status === 'Active' && (
                            <button 
                              className="custom-dropdown-item text-warning"
                              onClick={() => {
                                setSelectedLicense(license);
                                setShowActionMenu(null);
                                setShowRemoveMemberModal(true);
                              }}
                            >
                              <i className="ri-forbid-line me-2"></i>
                              Disable Member
                            </button>
                          )}
                          {license.status === 'Disabled' && (
                            <button 
                              className="custom-dropdown-item text-success"
                              onClick={() => {
                                setSelectedLicense(license);
                                setShowActionMenu(null);
                                setShowRemoveMemberModal(true);
                              }}
                            >
                              <i className="ri-checkbox-circle-line me-2"></i>
                              Activate Member
                            </button>
                          )}
                          {license.status === 'Pending' && (
                            <button 
                              className="custom-dropdown-item text-danger"
                              onClick={() => {
                                setShowActionMenu(null);
                                setShowCancelSlotModal(true);
                              }}
                            >
                              <i className="ri-close-circle-line me-2"></i>
                              Cancel Invitation
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLicenses.length === 0 && (
          <div className="text-center py-5">
            <i className="ri-inbox-line fs-1 text-muted mb-3 d-block"></i>
            <p className="text-muted">No licenses found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredLicenses.length > itemsPerPage && (
          <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
            <div className="text-muted small">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredLicenses.length)} of {filteredLicenses.length} entries
            </div>
            <nav>
              <ul className="pagination mb-0">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button 
                      className="page-link"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>

    {/* Invite Member Modal */}
    {showInviteModal && (
      <>
        <div className="modal-backdrop fade show"></div>
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered" style={{maxWidth: '600px'}}>
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <div>
                  <h5 className="welcome-heading mb-1 fs-5">Invite Member to License Slot(s)</h5>
                  <p className="text-muted small mb-0">Invite member to give license access!</p>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowInviteModal(false)}
                ></button>
              </div>
              <div className="modal-body pt-3">
                {/* Available Slots Info */}
                <div className="position-relative mb-4">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{background: 'rgba(251, 191, 36, 0.1)'}}>
                    <div className="license-stat-icon" style={{background: 'rgba(251, 191, 36, 0.2)', width: '48px', height: '48px'}}>
                      <i className="ri-gift-line" style={{color: '#f59e0b', fontSize: '1.5rem'}}></i>
                    </div>
                    <div>
                      <div className="fw-bold fs-3" style={{color: '#f59e0b'}}>{availableSlots}</div>
                      <div className="text-muted">Available Slot License(s)</div>
                    </div>
                    <button 
                      className="btn btn-sm btn-link ms-auto p-0 position-relative text-decoration-none" 
                      type="button" 
                      style={{border: 'none', background: 'none'}}
                      onMouseEnter={() => setShowInviteTooltip(true)}
                      onMouseLeave={() => setShowInviteTooltip(false)}
                    >
                      <i className="ri-information-line fs-5 text-muted"></i>
                    </button>
                  </div>
                  {showInviteTooltip && (
                    <div className="position-absolute end-0 mt-2 p-3 rounded shadow-sm" style={{
                      background: '#0B3D2E',
                      color: 'white',
                      fontSize: '0.8125rem',
                      maxWidth: '220px',
                      zIndex: 1050
                    }}>
                      You currently have {availableSlots} slot{availableSlots !== 1 ? 's' : ''} available to allocate to team members.
                    </div>
                  )}
                </div>

                {/* Form */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="tolgaakcay07@gmail.com"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2">Allocation</label>
                    <div className="d-flex align-items-center gap-2">
                      <button 
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        onClick={() => adjustSlotCount(false)}
                        type="button"
                      >
                        <i className="ri-subtract-line"></i>
                      </button>
                      <input 
                        type="number" 
                        className="form-control text-center"
                        value={slotAllocation}
                        onChange={(e) => setSlotAllocation(Math.max(1, Math.min(availableSlots, Number(e.target.value) || 1)))}
                        min="1"
                        max={availableSlots}
                        style={{maxWidth: '100px'}}
                      />
                      <span className="text-muted small" style={{minWidth: '50px'}}>Slot{slotAllocation !== 1 ? 's' : ''}</span>
                      <button 
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        onClick={() => adjustSlotCount(true)}
                        disabled={slotAllocation >= availableSlots}
                       
                        type="button"
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Send Invitation Button */}
                <button 
                  className="btn btn-success-custom w-100 mt-4 py-3"
                  onClick={handleSendInvitation}
                >
                  Send Invitation
                </button>

                {/* Info Alert */}
                <div className="d-flex gap-2 mt-4 p-3 rounded-3" style={{background: 'rgba(251, 191, 36, 0.1)'}}>
                  <i className="ri-information-line" style={{color: '#f59e0b', fontSize: '1.25rem', flexShrink: 0}}></i>
                  <p className="text-muted small mb-0">
                    Invite team members by sending them a license. Invitations can be edited later, and multiple license slots can be assigned to a single member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    {/* Edit License Modal */}
    {showEditModal && selectedLicense && (
      <>
        <div className="modal-backdrop fade show"></div>
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered" style={{maxWidth: '600px'}}>
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <div>
                  <h5 className="welcome-heading mb-1 fs-5">Edit License Slot(s) Details</h5>
                  <p className="text-muted small mb-0">Edit invite member to manage license access!</p>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body pt-3">
                {/* Available Slots Info with Tooltip */}
                <div className="position-relative mb-4">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{background: needsMoreSlots ? 'rgba(239, 68, 68, 0.1)' : 'rgba(251, 191, 36, 0.1)'}}>
                    <div className="license-stat-icon" style={{background: needsMoreSlots ? 'rgba(239, 68, 68, 0.2)' : 'rgba(251, 191, 36, 0.2)', width: '48px', height: '48px'}}>
                      <i className={needsMoreSlots ? "ri-error-warning-line" : "ri-gift-line"} style={{color: needsMoreSlots ? '#ef4444' : '#f59e0b', fontSize: '1.5rem'}}></i>
                    </div>
                    <div>
                      <div className="fw-bold fs-3" style={{color: needsMoreSlots ? '#ef4444' : '#f59e0b'}}>{availableSlots}</div>
                      <div className="text-muted">Available Slot License(s)</div>
                    </div>
                    <button 
                      className="btn btn-sm btn-link ms-auto p-0 position-relative text-decoration-none" 
                      type="button"
                      style={{border: 'none', background: 'none'}}
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      <i className="ri-information-line fs-5 text-muted"></i>
                    </button>
                  </div>
                  {showTooltip && (
                    <div className="position-absolute end-0 mt-2 p-3 rounded shadow-sm" style={{
                      background: '#0B3D2E',
                      color: 'white',
                      fontSize: '0.8125rem',
                      maxWidth: '220px',
                      zIndex: 1050
                    }}>
                      You currently have {availableSlots} slot{availableSlots !== 1 ? 's' : ''} available to allocate to team members.
                    </div>
                  )}
                </div>

                {/* Form */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2">Allocation</label>
                    <div className="d-flex align-items-center gap-2">
                      <button 
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        onClick={() => adjustSlotCount(false)}
                        type="button"
                      >
                        <i className="ri-subtract-line"></i>
                      </button>
                      <input 
                        type="number" 
                        className="form-control text-center"
                        value={slotAllocation}
                        onChange={(e) => setSlotAllocation(Math.max(1, Number(e.target.value) || 1))}
                        min="1"
                        style={{maxWidth: '100px'}}
                      />
                      <span className="text-muted small" style={{minWidth: '50px'}}>Slot{slotAllocation !== 1 ? 's' : ''}</span>
                      <button 
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        onClick={() => adjustSlotCount(true)}
                        type="button"
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Need More Slots Warning */}
                {needsMoreSlots && (
                  <div className="mt-4 p-4 rounded-3" style={{background: 'rgba(251, 191, 36, 0.15)'}}>
                    <div className="text-center mb-3">
                      <p className="fw-semibold mb-2" style={{color: '#f59e0b', fontSize: '0.9375rem'}}>Need more slot(s) to allocate?</p>
                      <h5 className="fw-bold mb-2">Purchase Additional {slotAllocation - availableSlots} License Slot(s)</h5>
                      <p className="text-muted mb-0">
                        This additional slot will be merge in your editing license plan & will charge with your existing plan tenure on 24 December, 2026
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="d-flex gap-3 mt-4">
                  <button 
                    className="btn btn-outline-danger d-flex align-items-center justify-content-center"
                    onClick={() => {
                      setShowEditModal(false);
                      setShowRemoveMemberModal(true);
                    }}
                    style={{width: '50px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}
                  >
                    <i className="ri-delete-bin-line fs-5" style={{display: 'block'}}></i>
                  </button>
                  <button 
                    className="btn btn-success-custom flex-grow-1 py-3"
                    onClick={needsMoreSlots ? () => {} : handleConfirmChanges}
                  >
                    {needsMoreSlots ? `Pay €${((slotAllocation - availableSlots) * 12.39).toFixed(2)} & Get Start` : 'Confirm Changes'}
                  </button>
                </div>

                {/* Info Alert */}
                <div className="d-flex gap-2 mt-4 p-3 rounded-3" style={{background: 'rgba(251, 191, 36, 0.1)'}}>
                  <i className="ri-information-line" style={{color: '#f59e0b', fontSize: '1.25rem', flexShrink: 0}}></i>
                  <p className="text-muted small mb-0">
                    Invite team members by sending them a license. Invitations can be edited later, and multiple license slots can be assigned to a single member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    {/* Cancel Slot Modal */}
    {showCancelSlotModal && (
      <>
        <div className="modal-backdrop fade show" onClick={() => setShowCancelSlotModal(false)}></div>
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered" style={{maxWidth: '480px'}}>
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0">
                <button 
                  type="button" 
                  className="btn-close ms-auto" 
                  onClick={() => setShowCancelSlotModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center pt-0 pb-4">
                {/* Icon */}
                <div className="mb-4 d-flex justify-content-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '120px',
                    height: '120px',
                    background: 'rgba(239, 68, 68, 0.1)'
                  }}>
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '90px',
                      height: '90px',
                      background: 'white',
                      border: '3px solid #374151'
                    }}>
                      <i className="ri-close-line" style={{fontSize: '3rem', color: '#ef4444'}}></i>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h5 className="welcome-heading mb-3 fs-5">Cancel Slot!</h5>
                <p className="text-muted small mb-3">
                  Are you sure you want to cancel <span className="fw-bold" style={{color: '#ef4444'}}>2 license slots</span>?<br/>
                  This action cannot be undone.
                </p>

                {/* Warning */}
                <div className="d-flex gap-2 p-3 rounded-3 mb-4 text-start" style={{background: 'rgba(251, 191, 36, 0.1)'}}>
                  <i className="ri-information-line" style={{color: '#f59e0b', fontSize: '1.25rem', flexShrink: 0}}></i>
                  <p className="text-muted mb-0" style={{fontSize: '0.875rem'}}>
                    AVIRIS will not charge you for these 2 license slots at the next renewal (24 December, 2026). However, you and your assigned members will continue to have access until the end of the current billing period.
                  </p>
                </div>

                {/* Buttons */}
                <div className="row g-2">
                  <div className="col-6">
                    <button 
                      className="btn btn-danger w-100 py-3"
                      onClick={handleCancelSlots}
                    >
                      Cancel 2 Slot
                    </button>
                  </div>
                  <div className="col-6">
                    <button 
                      className="btn btn-success-custom w-100 py-3"
                      onClick={() => setShowCancelSlotModal(false)}
                    >
                      Keep Slots
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    {/* Remove Member Modal */}
    {showRemoveMemberModal && selectedLicense && (
      <>
        <div className="modal-backdrop fade show" onClick={() => setShowRemoveMemberModal(false)}></div>
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered" style={{maxWidth: '480px'}}>
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0">
                <button 
                  type="button" 
                  className="btn-close ms-auto" 
                  onClick={() => setShowRemoveMemberModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center pt-0 pb-4">
                {/* Icon */}
                <div className="mb-4 d-flex justify-content-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '120px',
                    height: '120px',
                    background: 'rgba(239, 68, 68, 0.1)'
                  }}>
                    <div className="position-relative">
                      <i className="ri-user-line" style={{fontSize: '3.5rem', color: '#ef4444'}}></i>
                      <i className="ri-close-line position-absolute" style={{
                        fontSize: '2rem',
                        color: '#ef4444',
                        bottom: '-10px',
                        right: '-15px'
                      }}></i>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h5 className="welcome-heading mb-3 fs-5">Remove Member from License</h5>
                <p className="text-muted small mb-3">
                  You&apos;re about to remove this member from the selected license slot. Once removed, the member will immediately lose access to AVIRIS features under this license.
                </p>

                {/* Warning */}
                <div className="d-flex gap-2 p-3 rounded-3 mb-4 text-start" style={{background: 'rgba(251, 191, 36, 0.1)'}}>
                  <i className="ri-information-line" style={{color: '#f59e0b', fontSize: '1.25rem', flexShrink: 0}}></i>
                  <p className="text-muted small mb-0">
                    This action does not cancel the license or affect billing.
                  </p>
                </div>

                {/* Checkbox */}
                <div className="form-check text-start mb-4">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="confirmRemove"
                    checked={confirmRemove}
                    onChange={(e) => setConfirmRemove(e.target.checked)}
                  />
                  <label className="form-check-label text-muted small" htmlFor="confirmRemove">
                    I understand that this member will no longer have access to this license.
                  </label>
                </div>

                {/* Buttons */}
                <div className="row g-2">
                  <div className="col-6">
                    <button 
                      className="btn btn-outline-custom w-100 py-3"
                      onClick={() => setShowRemoveMemberModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-6">
                    <button 
                      className="btn btn-danger w-100 py-3"
                      onClick={handleRemoveMember}
                      disabled={!confirmRemove}
                    >
                      Remove Member
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    {/* Success Modal */}
    {showSuccessModal && (
      <>
        <div className="modal-backdrop fade show" onClick={handleCloseSuccess}></div>
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered" style={{maxWidth: '480px'}}>
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0">
                <button 
                  type="button" 
                  className="btn-close ms-auto" 
                  onClick={handleCloseSuccess}
                ></button>
              </div>
              <div className="modal-body text-center pt-0 pb-4">
                {/* Icon */}
                <div className="mb-4 d-flex justify-content-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '120px',
                    height: '120px',
                    background: 'rgba(34, 197, 94, 0.1)'
                  }}>
                    <i className="ri-mail-send-line" style={{fontSize: '3.5rem', color: '#22c55e'}}></i>
                  </div>
                </div>

                {/* Content */}
                <h5 className="welcome-heading mb-3 fs-5">Invitation Sent Successfully</h5>
                <p className="text-muted small mb-3">
                  Your license invitation has been successfully sent to{' '}
                  <span className="fw-semibold" style={{color: '#22c55e'}}>{inviteEmail}</span>{' '}
                  with <span className="fw-semibold">{slotAllocation} license slots</span> assigned.
                </p>

                {/* Info */}
                <div className="d-flex gap-2 p-3 rounded-3 mb-4 text-start" style={{background: 'rgba(251, 191, 36, 0.1)'}}>
                  <i className="ri-information-line" style={{color: '#f59e0b', fontSize: '1.25rem', flexShrink: 0}}></i>
                  <p className="text-muted small mb-0">
                    The invited member will gain access once the invitation is accepted.
                  </p>
                </div>

                {/* Support Text */}
                <p className="text-muted small mb-4">
                  If you need any further assistance, feel free to contact our{' '}
                  <a href="/user/support" className="fw-semibold" style={{color: '#22c55e', textDecoration: 'none'}}>customer support</a>.
                </p>

                {/* Buttons */}
                <div className="row g-2">
                  <div className="col-6">
                    <button 
                      className="btn btn-outline-custom w-100 py-3"
                      onClick={handleCloseSuccess}
                    >
                      Manage License
                    </button>
                  </div>
                  <div className="col-6">
                    <button 
                      className="btn btn-success-custom w-100 py-3"
                      onClick={handleCloseSuccess}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    {/* Add Slot Modal */}
    {showAddSlotModal && (
      <>
        <div className="modal-backdrop fade show" onClick={() => setShowAddSlotModal(false)}></div>
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered" style={{maxWidth: '600px'}}>
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <div>
                  <h5 className="welcome-heading mb-1 fs-5">Purchase Additional License Slot(s)</h5>
                  <p className="text-muted small mb-0">Add more slots to your license plan!</p>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowAddSlotModal(false)}
                ></button>
              </div>
              <div className="modal-body pt-3">
                {/* Slot Counter */}
                <div className="text-center mb-4">
                  <label className="form-label fw-semibold mb-3">Number of Slots</label>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <button 
                      className="btn btn-outline-custom d-flex align-items-center justify-content-center"
                      onClick={() => adjustNewSlots(false)}
                      disabled={newSlotsCount <= 1}
                      style={{width: '48px', height: '48px', borderRadius: '10px', fontSize: '1.25rem'}}
                    >
                      <i className="ri-subtract-line"></i>
                    </button>
                    <div className="px-4 py-2 bg-light rounded-3" style={{minWidth: '100px', textAlign: 'center'}}>
                      <span className="fw-bold fs-3">{newSlotsCount}</span>
                      <div className="text-muted small">Slot{newSlotsCount > 1 ? 's' : ''}</div>
                    </div>
                    <button 
                      className="btn btn-outline-custom d-flex align-items-center justify-content-center"
                      onClick={() => adjustNewSlots(true)}
                      style={{width: '48px', height: '48px', borderRadius: '10px', fontSize: '1.25rem'}}
                    >
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                </div>

                {/* Pricing Info */}
                <div className="p-4 mb-4 rounded-3" style={{background: 'rgba(22, 163, 74, 0.1)'}}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted">Price per slot:</span>
                    <span className="fw-semibold">€12.39</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted">Number of slots:</span>
                    <span className="fw-semibold">×{newSlotsCount}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Total Amount:</span>
                    <span className="fw-bold fs-4" style={{color: 'var(--aviris-secondary)'}}>€{(newSlotsCount * 12.39).toFixed(2)}</span>
                  </div>
                </div>

                {/* Purchase Button */}
                <button 
                  className="btn btn-success-custom w-100 py-3 mb-4"
                  onClick={handleAddSlots}
                >
                  Purchase {newSlotsCount} Slot{newSlotsCount > 1 ? 's' : ''} - €{(newSlotsCount * 12.39).toFixed(2)}
                </button>

                {/* Info Alert */}
                <div className="d-flex gap-2 p-3 rounded-3" style={{background: 'rgba(251, 191, 36, 0.1)'}}>
                  <i className="ri-information-line" style={{color: '#f59e0b', fontSize: '1.25rem', flexShrink: 0}}></i>
                  <p className="text-muted small mb-0">
                    This additional slot will be merged with your existing license plan and will be charged with your existing plan tenure on 24 December, 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    </>
  );
}